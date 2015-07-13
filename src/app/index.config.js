(function() {
  'use strict';

  angular
    .module('zooplaBathrooms')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
