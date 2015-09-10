(function() {
  'use strict';

  angular
    .module('restPokedex')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/pokedex',
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuController',
          },
          'pokelist': {
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
          }
        },
      })
      .state('app.detail', {
        url: '/:pokemonId',
        views: {
          'detail': {
            templateUrl: 'app/pokemon-detail/pokemon.detail.tpl.html',
            controller: 'DetailController',
          }
        },
      });

    $urlRouterProvider.otherwise('/pokedex');
  }

})();
