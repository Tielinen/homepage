module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("snippets");
  eleventyConfig.addPassthroughCopy("settings.js");
  eleventyConfig.addPassthroughCopy("_redirects");
};
