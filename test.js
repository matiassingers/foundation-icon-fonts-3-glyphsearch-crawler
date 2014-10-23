'use strict';

var assert = require('assert');
var cheerio = require('cheerio');
var foundation = require('./foundation');

describe('fetchWebpage()', function(){
  this.timeout(0);

  var icons;
  before(function(done){
    foundation.fetchWebpage()
      .then(function(response){
        icons = response;

        done();
      });
  });

  it('should return array of icons', function(){
    assert(icons.length);
  });

  it('each icon should have data-dropdown attr', function(){
    var element = $(icons[0]);
    assert(element.data('dropdown'));
  });
});
