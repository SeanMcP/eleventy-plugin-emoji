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
Shortcode with label: {% emoji "☝️", "finger pointing to the sky" %}

Shortcode without label: {% emoji "✌️" %}

Filter with label: {{ "🤟" | emoji: "spider-man hand" }}

Filter without label: {{ "🖐" | emoji }}
```

**Note**: These filter examples [use Liquid](https://shopify.dev/docs/themes/liquid/reference/filters), the default markdown rendering engine for Eleventy. If you are using Nunjucks, the [syntax is slightly different](https://mozilla.github.io/nunjucks/templating.html#filters):

```md
<!-- Nunjucks syntax for filter arguments -->
{{ "✍️" | emoji("taking notes") }}
```

## How

The shortcode and filter take an emoji and optional label, and wrap it in a containing element with the appropriate accessibility attributes.

For emoji with a label, the default output is:

```html
<!-- {% emoji "🐵", "monkey face" %} or {{ "🐵" | emoji: "monkey face" }} -->
<span aria-label="monkey face" class="eleventy-emoji" role="img">🐵</span>
```

For emoji without labels, the default output is:

```html
<!-- {% emoji "🙈" %} or {{ "🙈" | emoji }} -->
<span aria-hidden="true" class="eleventy-emoji" role="img">🙈</span>
```

This follows the pattern recommended by [Léonie Watson](http://tink.uk/accessible-emoji/) and used by various accessibility validators.

## Options

There are two options to configure `eleventy-plugin-emoji`:

| Option      | Default          | Explanation                                 |
| ----------- | ---------------- | ------------------------------------------- |
| `element`   | `span`           | The element that will wrap the emoji symbol |
| `className` | `eleventy-emoji` | A class applied to the wrapping element     |

To configure the plugin, pass an object with the any of the above keys to Eleventy's `addPlugin()` function:

```js
eleventyConfig.addPlugin(require("eleventy-plugin-emoji"), {
  element: "i",
  className: "emoji",
});
```

The output from the previous configuration would be:

```html
<!-- {% emoji "⚙️", "settings gear" %} -->
<i aria-label="settings gear" class="emoji" role="img">⚙️</i>
```

## License

[MIT](./LICENSE) © [Sean McPherson](https://seanmcp.com)
