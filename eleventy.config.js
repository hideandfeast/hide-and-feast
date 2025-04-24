export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");   // copy brand stylesheet
  return { dir: { output: "_site" } };        // otherwise use Eleventy defaults
}
