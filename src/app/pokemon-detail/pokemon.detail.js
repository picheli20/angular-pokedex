(function() {
  'use strict';

  angular
    .module('restPokedex')
    .controller('DetailController', ['$scope', 'Pokedex', '$http', 'baseUrl', '$state', 'Comment', DetailController])
    .directive('pokemonDetail', pokemonDetail);

    function DetailController($scope, Pokedex, $http, baseUrl, $state, Comment){
      var pokeId = $state.params.pokemonId;
      if (!pokeId || isNaN(pokeId)) $state.go("app");

      $scope.pokemonDetail = function(){
        return Pokedex.detailPkn;
      }

      $scope.comment = new Comment(pokeId);

      $scope.goHome = function(){
        $state.go("app");
        Pokedex.detailPkn = null;
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
