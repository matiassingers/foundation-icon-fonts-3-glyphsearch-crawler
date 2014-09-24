# foundation-icon-fonts-3-glyphsearch-crawler [![Build Status](http://img.shields.io/travis/matiassingers/foundation-icon-fonts-3-glyphsearch-crawler.svg?style=flat-square)](https://travis-ci.org/matiassingers/foundation-icon-fonts-3-glyphsearch-crawler) [![Dependency Status](http://img.shields.io/gemnasium/matiassingers/foundation-icon-fonts-3-glyphsearch-crawler.svg?style=flat-square)](https://gemnasium.com/matiassingers/foundation-icon-fonts-3-glyphsearch-crawler)
> Creates JSON file of all [Foundation Icons Font 3](http://zurb.com/playground/foundation-icon-fonts-3) for [GlyphSearch](http://glyphsearch.com/)

Adapted version of [octicons-glyphsearch-crawler](https://github.com/matiassingers/octicons-glyphsearch-crawler).

See [GlyphSearch PR #31](https://github.com/thomaspark/glyphsearch/pull/31) for how this crawler was used.

## Usage

```sh
$ git clone git@github.com:matiassingers/foundation-icon-fonts-3-glyphsearch-crawler.git && cd foundation-icon-fonts-3-glyphsearch-crawler/
$ npm install
$ node foundation.js <path-to-glyphsearch>
```

If no argument is supplied, it'll output in current working directory as `icons-foundation.json`.

## Example

```sh
$ node foundation.js ../glyphsearch/
writing file to ../glyphsearch/data/icons-foundation.json
```

## License
MIT © [Matias Singers](http://mts.io)
