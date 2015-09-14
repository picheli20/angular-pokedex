'use strict';

describe('Pokedex Home', function () {
  var page;

  beforeEach(function () {
    browser.get('/#/pokedex');
    page = require('./main.po');
  });

  it('check the header title', function() {
    expect(page.title.getText()).toBe('Pokedex');
    browser.waitForAngular();
  });

  it('should has no result', function() {
    page.search.sendKeys("adc");
    expect(page.listOfPokemon.count()).toBe(0);
    expect(page.noResult.isDisplayed()).toBeTruthy();
  });

  it('should has a result', function() {
    page.search.sendKeys("Pika");
    expect(page.listOfPokemon.count()).toBe(1);
  });

});
