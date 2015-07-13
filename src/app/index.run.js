(function() {
  'use strict';

  angular
    .module('zooplaBathrooms')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
