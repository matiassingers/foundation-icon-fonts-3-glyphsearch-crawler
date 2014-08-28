var request = require('promise-request');
var cheerio = require('cheerio');
var _ = require('lodash');
var fs = require('fs');
var path = require('path');

var destination = process.argv.slice(2)[0];

function run(){
  fetchWebpage()
    .then(handleItems)
    .then(writeFile);
}

function fetchWebpage(){
  var url = 'http://zurb.com/playground/foundation-icon-fonts-3';

  return request(url)
    .then(function(body){
      $ = cheerio.load(body);

      return $('.large-12.columns .small-block-grid-2.large-block-grid-4 li p').toArray();
    });
}

function handleItems(items){
  var icons = _.map(items, function(item){
    var element = $(item);

    var keyword = element.data('dropdown');
    var tags;

    if(keyword === 'phone'){
      keyword = 'telephone';
      tags = 'phone'
    }

    return {
      name: keyword,
      tags: tags
    };
  });

  return {
    foundation: icons
  };
}

function writeFile(icons){
  var file = destination ? path.join(destination, 'data', 'icons-foundation.json') : path.join(__dirname, 'icons-foundation.json');
  var data = JSON.stringify(icons, null, 2);

  console.log('writing file to ' + file);

  fs.writeFile(file, data, function(error){
    if(error)
      return console.log(error);
  });
}

if(require.main === module) {
  run();
}

module.exports = {
  run: run,
  fetchWebpage: fetchWebpage
};