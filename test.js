'use strict';

var fs = require('fs');
var path = require('path');
var assert = require('assert');
var cheerio = require('cheerio');
var foundation = require('./foundation');

describe('fetchWebpage()', function(){
  var fetch = foundation.fetchWebpage();

  it('should return array of icons', function(){
    fetch
      .then(function(icons){
        assert(icons.length);
      });
  });

  it('each icon should have data-dropdown attr', function(){
    fetch
      .then(function(icons){
        var element = $(icons[0]);
        assert(element.data('dropdown'));
      });
  });
});
