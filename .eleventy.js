const yaml = require('js-yaml');

module.exports = function (eleventyConfig) {
  eleventyConfig.addDataExtension('yaml', (contents) =>
    yaml.safeLoad(contents),
  );

  eleventyConfig.addPassthroughCopy('src/media');

  return {
    dir: { input: 'src', output: 'dist', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk',
  };
};
