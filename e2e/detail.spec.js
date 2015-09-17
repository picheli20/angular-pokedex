'use strict';

describe('Pokedex Detail', function () {
  var detail, commentsToTest;


  beforeEach(function () {
    browser.get('/#/pokedex/1');
    detail = require('./detail.po');
  });

  function checkComment(bool, i){
    it('should verify if has comment or not ('+bool+' | ' + i + ')', function(){
      detail.checkLastComment(bool);
    });
  };

  var commentsToTest = [
    {
      "name" : "[0] " + (new Date()),
      "email" : "test@test.com",
      "comment" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis diam laoreet, vehicula magna et, hendrerit nunc. Suspendisse fermentum viverra commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi lobortis ante eget maximus malesuada",
      "isValid" : true
    },
    {
      "name" : "[1] " + (new Date()),
      "email" : "test",
      "comment" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis diam laoreet, vehicula magna et, hendrerit nunc. Suspendisse fermentum viverra commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi lobortis ante eget maximus malesuada",
      "isValid" : false
    },
    {
      "name" : "[2] " + (new Date()),
      "email" : "test@dasdas",
      "comment" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis diam laoreet, vehicula magna et, hendrerit nunc. Suspendisse fermentum viverra commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi lobortis ante eget maximus malesuada",
      "isValid" : false
    },
    {
      "name" : "[3] " + (new Date()),
      "email" : "test@dasdas",
      "comment" : "",
      "isValid" : false
    },
    {
      "name" : "[4] " + (new Date()),
      "email" : "",
      "comment" : "",
      "isValid" : false
    },
    {
      "name" : "",
      "email" : "test@test.com",
      "comment" : "",
      "isValid" : false
    },
    {
      "name" : "",
      "email" : "",
      "comment" : "Bla Bla bla....",
      "isValid" : false
    },
    {
      "name" : "",
      "email" : "test@test.com",
      "comment" : "Bla Bla bla....",
      "isValid" : false
    },
    {
      "name" : "",
      "email" : "",
      "comment" : "",
      "isValid" : false
    }
  ];

  for (var i = 0; i < commentsToTest.length; i++) {
    var comment = commentsToTest[i];

    it('should test a comment creation (' + i + ')', function() {
      browser.waitForAngular();
      var name = detail.sendComment(comment.name, comment.email, comment.comment);
    });

    checkComment(comment.isValid, i);

  };

});
