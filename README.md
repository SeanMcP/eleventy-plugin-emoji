# `eleventy-plugin-emoji`

[![npm](https://img.shields.io/npm/v/eleventy-plugin-emoji.svg)](https://npmjs.com/package/eleventy-plugin-emoji) [![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/eleventy-plugin-emoji.svg)](https://npmjs.com/package/eleventy-plugin-emoji) [![npm](https://img.shields.io/npm/dt/eleventy-plugin-emoji.svg)](https://npmjs.com/package/eleventy-plugin-emoji)

🎈 An accessible emoji shortcode and filter for your Eleventy projects

## Use

Install this package with your favorite manager:

```sh
npm i eleventy-plugin-emoji
```

Then add it to your project's `.eleventy.js` configuration:

```js
// .eleventy.js
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(require("eleventy-plugin-emoji"));
};
```

Finally, use the emoji shortcode or filter:

```md
This is a shortcode with a label: {% emoji "☝️", "finger pointing to the sky" %}

This is a shortcode with no label: {% emoji "✌️" %}

And this is a filter (no label): {{ "🤟" | emoji }}
```

## How

The shortcode and filter take an emoji (and optional symbol for the shortcode) and wrap it with a containing element with the appropriate accessibility attributes.

For emoji shortcuts with a label, the default output is:

```html
<span aria-label="monkey face" class="11ty-emoji" role="img">🐵</span>
```

For emoji shortcuts without labels or filters, the default output is:

```html
<span aria-hidden="true" class="11ty-emoji" role="img">🙈</span>
```

This follows the pattern recommended by [Léonie Watson](http://tink.uk/accessible-emoji/) and used by various accessibility validators.

## Options

There are two options to configure `eleventy-plugin-emoji`:

| Option      | Default      | Explanation                                 |
| ----------- | ------------ | ------------------------------------------- |
| `element`   | `span`       | The element that will wrap the emoji symbol |
| `className` | `11ty-emoji` | A class applied to the wrapping element     |

To configure the plugin, pass an object with the any of the above keys to Eleventy's `addPlugin()` function:

```js
eleventyConfig.addPlugin(require('eleventy-plugin-emoji'), {
    element: 'i',
    className: 'emoji'
})
```

The output from the previous configuration would be:

```html
<i aria-label="Settings gear" class="emoji" role="img">⚙️</i>
```

## License

[MIT](./LICENSE)
