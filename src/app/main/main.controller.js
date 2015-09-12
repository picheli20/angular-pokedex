(function() {
  'use strict';

  angular
    .module('restPokedex')
    .controller('MainController', ['$scope', 'Pokedex', 'General', '$state', MainController]);

  /** @ngInject */
  function MainController($scope, Pokedex, General, $state) {
    $scope.pokedex = Pokedex;
    Pokedex.loadPokemons();
    $scope.general = General;
    $scope.onHome = function(){
      return $state.current.name == 'app';
    };
  }
})();
