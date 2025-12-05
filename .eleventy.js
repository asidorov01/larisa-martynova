module.exports = function(eleventyConfig) {
  // Copy assets folder to output directory as /assets
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Copy .well-known folder for ACME challenges and other purposes
  eleventyConfig.addPassthroughCopy({ "content/.well-known": ".well-known" });

  // Set custom directories
  return {
    dir: {
      input: "content",
      output: "_site",
      includes: "../src/_includes",
      data: "../src/_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
