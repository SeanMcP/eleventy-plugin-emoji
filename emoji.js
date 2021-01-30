module.exports = function eleventyPluginEmoji(eleventyConfig, options = {}) {
  const element = options.element || "span";
  const className = options.className || "eleventy-emoji";

  function emoji(symbol, label) {
    return `<${element} ${
      label ? `aria-label="${label}"` : 'aria-hidden="true"'
    } class="${className}" role="img">${symbol}</${element}>`;
  }

  eleventyConfig.addShortcode("emoji", emoji);
  eleventyConfig.addFilter("emoji", emoji);
};
