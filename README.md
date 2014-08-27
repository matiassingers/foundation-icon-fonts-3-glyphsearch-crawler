# foundation-icon-fonts-3-glyphsearch-crawler [![Build Status](https://api.shippable.com/projects/53fc36ec944d7f5808f6e110/badge/master)](https://www.shippable.com/projects/53fc36ec944d7f5808f6e110)
> Creates JSON file of all [Foundation Icons Font 3](http://zurb.com/playground/foundation-icon-fonts-3) for [GlyphSearch](http://glyphsearch.com/)

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
