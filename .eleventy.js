import * as yaml from "js-yaml";

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

  // Past events drop off the site on the next build. Any CMS save triggers a
  // rebuild, so in practice this keeps itself tidy without anyone deleting
  // anything by hand.
  eleventyConfig.addCollection("events", (collectionApi) => {
    const today = new Date().toISOString().slice(0, 10);
    return collectionApi
      .getFilteredByGlob("src/content/events/*.md")
      .filter((item) => isoDate(item.data.event_date) >= today)
      .sort((a, b) =>
        isoDate(a.data.event_date).localeCompare(isoDate(b.data.event_date))
      );
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
}
