(function() {
  'use strict';

  angular
    .module('restPokedex')
    .controller('MainController', ['$scope', 'Pokedex', '$http', 'baseUrl', MainController]);

  /** @ngInject */
  function MainController($scope, Pokedex, $http, baseUrl) {
    $scope.pokedex = Pokedex;
    Pokedex.loadPokemons();
    
  }
})();
