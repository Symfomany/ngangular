(function () {
    'use strict';

    angular
        .module('app.detail', [])
        .controller('DetailCtrl', DetailController);

    DetailController.$inject = ['$stateParams'];
    function DetailController($stateParams) {
        var vm = this;
        console.log($stateParams.id);

    }
})();