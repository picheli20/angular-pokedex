(function() {
  'use strict';

  angular
    .module('restPokedex')
    .directive('pokemonList', pokemonList);

    function pokemonList() {
      return {
        scope: {
          pokedex: '=data'
        },
        templateUrl: 'app/pokemon-list/pokemon.list.tpl.html',
      };
    }

})();
