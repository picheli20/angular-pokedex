(function() {
  'use strict';

  angular
    .module('restPokedex')
    .controller('MainController', ['$scope', 'Pokedex', 'General', MainController]);

  /** @ngInject */
  function MainController($scope, Pokedex, General) {
    $scope.pokedex = Pokedex;
    Pokedex.loadPokemons();

    $scope.general = General;
    
  }
})();
