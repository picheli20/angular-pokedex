'use strict';

describe('Pokedex Detail', function () {
  var detail;

  beforeEach(function () {
    browser.get('/#/pokedex/1');
    detail = require('./detail.po');
  });

  it('should send a comment and check', function() {
    browser.waitForAngular();
    detail.setDate();
    var name = detail.sendComment("[Test] " + detail.date, "test@test.com", "Comment...");
  });
  it('should have the comment', function(){
    detail.checkLastComment(true);
  });

  it('should block without name', function() {
    browser.waitForAngular();
    var name = detail.sendComment("", "test@test.com", "Comment...");
  });
  it('should havent the comment', function(){
    detail.checkLastComment(false);
  });
});
