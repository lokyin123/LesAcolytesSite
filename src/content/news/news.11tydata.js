export default {
  layout: "news-post.njk",
  permalink: (data) => `/news/${data.page.fileSlug}/index.html`,
};
