module.exports = function(eleventyConfig) {
  // Copy assets folder to output directory as /assets
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

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
