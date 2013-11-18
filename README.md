karma-preprocessor-haml
=======================
> A Karma preprocessor that Compile haml script to html.

## Installation

The easiest way is to keep `karma-haml-preprocessor` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "karma-haml-preprocessor": "~0.1"
  }
}
```

You can simple do it by:
```
npm install karma-haml-preprocessor
```

## Configuration
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    files: [
      '*.haml'
    ],
    preprocessors: {
      'app/assets/javascripts/**/*.haml'   : 'haml'
    }
  });
};
```
