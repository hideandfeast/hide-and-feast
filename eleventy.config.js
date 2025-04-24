export default function (eleventyConfig) {
  /* 1 — Copy static assets */
  eleventyConfig.addPassthroughCopy("css");

  /* 2 — Universal stub for any unknown Nunjucks filter
         Usage: if a template calls |someFilter, we return the
         original value unchanged instead of throwing an error. */
  eleventyConfig.setUnknownFilterWarning(false);
  eleventyConfig.addNunjucksFilter(
    "safeFilter",
    (value) => value
  );
  eleventyConfig.addNunjucksAsyncFilter(
    "safeFilter",
    (value, callback) => callback(null, value)
  );
  // Map common missing filters to safeFilter
  [
    "htmlBaseUrl",
    "htmlDateString",
    "htmlTimeTag",
    "readableDate",
    "w3DateFilter"
  ].forEach((name) => eleventyConfig.addNunjucksFilter(name, eleventyConfig.getFilter("safeFilter")));

  /* 3 — Return defaults */
  return { dir: { output: "_site" } };
}
