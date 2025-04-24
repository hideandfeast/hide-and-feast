export default function (eleventyConfig) {
  /* Copy brand stylesheet */
  eleventyConfig.addPassthroughCopy("css");

  /* Provide the only custom filter the home-page uses */
  eleventyConfig.addNunjucksFilter("limit", (array, n) =>
    Array.isArray(array) ? array.slice(0, n) : []
  ); // community pattern :contentReference[oaicite:1]{index=1}

  /* Everything else stays default */
    return { dir: { input: "content", output: "_site" } };
}
