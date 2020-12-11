module.exports = function eleventyPluginEmoji(eleventyConfig, options = {}) {
  const element = options.element || "span";
  const className = options.className || "11ty-emoji";

  eleventyConfig.addShortcode("emoji", function (symbol, label) {
    return `<${element} ${label ? `aria-label="${label}"` : 'aria-hidden="true"'} class="${className}" role="img">${symbol}</${element}>`;
  });

  eleventyConfig.addFilter("emoji", function (symbol) {
    return `<${element} aria-hidden="true" class="${className}" role="img">${symbol}</${element}>`;
  });
};
