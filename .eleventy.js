module.exports = function (eleventyConfig) {
  // Pass through the CSS file to the _site directory
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("snippets");
  eleventyConfig.addPassthroughCopy("settings.js");
  eleventyConfig.addPassthroughCopy("_redirects");

  // Optional: You can also pass through other assets like images or JavaScript
  // eleventyConfig.addPassthroughCopy("images");
  // eleventyConfig.addPassthroughCopy("scripts");

  // Return your Eleventy configuration object (optional, if you have other settings)
  return {
    // Other configurations can go here
  };
};
