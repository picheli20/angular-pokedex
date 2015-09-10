(function() {
  'use strict';

  angular
    .module('restPokedex')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
