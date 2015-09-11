/* global toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('restPokedex')
    .constant('baseUrl', 'http://pokeapi.co/')
    .constant('toastr', toastr)
    .constant('moment', moment);

})();
