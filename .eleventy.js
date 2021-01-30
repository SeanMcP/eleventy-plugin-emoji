module.exports = (eleventyConfig) => {
  // eleventyConfig.addPlugin(require("./emoji"));
  eleventyConfig.addPlugin(require('./emoji'), { element: 'i', className: 'emoji' })
  // return {
  //   markdownTemplateEngine: 'njk'
  // }
};
