export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  return { dir: { output: "_site" } };
}
