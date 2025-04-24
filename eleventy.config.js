module.exports = function (eleventyConfig) {
  // Copy the css folder to the output
  eleventyConfig.addPassthroughCopy("css");

  return {
    dir: {
      input: "content",
      includes: "../_includes",
      layouts: "../_includes/layouts",
      data: "../_data",
      output: "_site",
    },
  };
};
