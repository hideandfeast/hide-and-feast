export default function (eleventyConfig) {
  /* ——— Static assets ——— */
  eleventyConfig.addPassthroughCopy("css");

  /* ——— Stub missing filters ——— */
  // The starter’s sitemap template expects htmlBaseUrl.
  eleventyConfig.addNunjucksFilter("htmlBaseUrl", (url) => url);

  /* ——— Return defaults ——— */
  return { dir: { output: "_site" } };
}
