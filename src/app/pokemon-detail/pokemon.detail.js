(function() {
  'use strict';

  angular
    .module('restPokedex')
    .controller('DetailController', ['$scope', 'Pokedex', '$http', 'baseUrl', '$state', DetailController])
    .directive('pokemonDetail', pokemonDetail);

    function DetailController($scope, Pokedex, $http, baseUrl, $state){
      var pokeId = $state.params.pokemonId;
      if (!pokeId || isNaN(pokeId)) $state.go("app");

      $scope.pokemonDetail = function(){
        return Pokedex.detailPkn;
      }

    }

    function pokemonDetail() {
      return {
        scope: {
          pokemon: '=data'
        },
        templateUrl: 'app/pokemon-detail/pokemon.detail.tpl.html'
      };
    }

})();
