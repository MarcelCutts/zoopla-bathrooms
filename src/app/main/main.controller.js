(function() {
  'use strict';

  angular
    .module('zooplaBathrooms')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.awesomeThings = [];
  }
})();
