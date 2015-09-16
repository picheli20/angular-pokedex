'use strict';

describe('Pokedex Detail', function () {
  var detail;

  function checkComment(bool){
    it('should verify if has comment or not ('+bool+')', function(){
      detail.checkLastComment(bool);
    });
  }

  beforeEach(function () {
    browser.get('/#/pokedex/1');
    detail = require('./detail.po');
  });

  it('should send a comment and check', function() {
    browser.waitForAngular();
    detail.setDate();
    var name = detail.sendComment("[Test] " + detail.date, "test@test.com", "Comment...");
  });
  
  checkComment(true);

  it('should block with wrong email', function() {
    browser.waitForAngular();
    detail.setDate();
    var name = detail.sendComment("[Test] " + detail.date, "test", "Comment...");
  });

  checkComment(false);

  it('should block with wrong email with @', function() {
    browser.waitForAngular();
    detail.setDate();
    var name = detail.sendComment("[Test] " + detail.date, "test@dads", "Comment...");
  });

  checkComment(false);

  it('should block with no comment', function() {
    browser.waitForAngular();
    detail.setDate();
    var name = detail.sendComment("[Test] " + detail.date, "test@dads", "");
  });

  checkComment(false);

  it('should block with no name', function() {
    browser.waitForAngular();
    var name = detail.sendComment("", "test@dads", "bla bla bla...");
  });

  checkComment(false);

});
