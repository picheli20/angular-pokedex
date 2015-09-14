/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
    this.listOfPokemon = element.all(by.repeater('pk in pokeDataList = (pokedex.pokemonList | orderBy:\'id\' | filter: { \'name\' : pokemonSearch })'));
    this.search = element(by.css('.search input'));
    this.loading = element(by.css('.loading'));
    this.title = element(by.css('.menu-container .title'));
    this.noResult = element(by.css('.no-result'));

  //this.thumbnailEls = element(by.css('body')).all(by.repeater('awesomeThing in main.awesomeThings'));
};

module.exports = new MainPage();
