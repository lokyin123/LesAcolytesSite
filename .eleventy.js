import * as yaml from "js-yaml";
import MarkdownIt from "markdown-it";
import fs from "node:fs";

const markdown = new MarkdownIt({ html: false, linkify: true });

// Event dates arrive as a plain "YYYY-MM-DD" string from the CMS, but YAML
// front matter may already have parsed one into a Date. Normalise to a string
// so sorting and comparing stay simple.
function isoDate(value) {
  if (!value) return "";
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value).slice(0, 10);
}

const eventDateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export default function (eleventyConfig) {
  eleventyConfig.addDataExtension("yaml,yml", (contents) => yaml.load(contents));

  eleventyConfig.addCollection("siteSections", () =>
    yaml.load(fs.readFileSync("src/_data/sections.yaml", "utf8")).filter((section) => section.slug !== "news")
  );

  // The visual tweaks panel is rendered only by Eleventy's local preview
  // server. A normal production build never receives its markup or code.
  eleventyConfig.addGlobalData(
    "isDevelopment",
    process.argv.some((argument) => argument === "--serve" || argument.startsWith("--serve="))
  );

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/admin");

  // "12 September 2026" — the editor only ever enters the date once.
  eleventyConfig.addFilter("eventDate", (value) => {
    var iso = isoDate(value);
    if (!iso) return "";
    return eventDateFormat.format(new Date(iso + "T00:00:00Z"));
  });

  eleventyConfig.addFilter("isExternalUrl", (value) =>
    /^https?:\/\//i.test(String(value || ""))
  );

  eleventyConfig.addFilter("renderMarkdown", (value) =>
    markdown.render(String(value || ""))
  );

  // Past events drop off the site on the next build. Any CMS save triggers a
  // rebuild, so in practice this keeps itself tidy without anyone deleting
  // anything by hand.
  eleventyConfig.addCollection("events", (collectionApi) => {
    const today = new Date().toISOString().slice(0, 10);
    return collectionApi
      .getFilteredByGlob("src/content/events/*.md")
      .filter((item) => !item.data.past_performance && isoDate(item.data.event_date) >= today)
      .sort((a, b) =>
        `${isoDate(a.data.event_date)} ${a.data.event_time || ""}`.localeCompare(
          `${isoDate(b.data.event_date)} ${b.data.event_time || ""}`
        )
      );
  });

  eleventyConfig.addCollection("pastEvents", (collectionApi) => {
    const today = new Date().toISOString().slice(0, 10);
    return collectionApi
      .getFilteredByGlob("src/content/events/*.md")
      .filter((item) => item.data.past_performance || isoDate(item.data.event_date) < today)
      .sort((a, b) => isoDate(b.data.event_date).localeCompare(isoDate(a.data.event_date)));
  });

  eleventyConfig.addFilter("photoSlides", (photos) => {
    const slides = [];
    for (let index = 0; index < (photos || []).length; index += 3) {
      slides.push(photos.slice(index, index + 3));
    }
    return slides;
  });

  eleventyConfig.addFilter("eventSlides", (events) => {
    const slides = [];
    for (let index = 0; index < (events || []).length; index += 2) {
      slides.push(events.slice(index, index + 2));
    }
    return slides;
  });

  // News posts remain as portable Markdown files and are shown newest first.
  eleventyConfig.addCollection("news", (collectionApi) =>
    collectionApi
      .getFilteredByGlob("src/content/news/*.md")
      .sort((a, b) =>
        isoDate(b.data.news_date).localeCompare(isoDate(a.data.news_date))
      )
  );

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
}
