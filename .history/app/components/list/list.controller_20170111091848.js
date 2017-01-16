(function() {
    angular.module('app.main', []);
    'use strict';

    angular
        .module('app.main')
        .controller('ListCtrl', ListCtrl);

    ListCtrl.$inject = ['$log', '$scope'];

    /** @ngInject */
    function ListCtrl($log, $scope) {
        /* jshint validthis: true */
        var vm = this;
        init();

        function init() {
            console.log("Ici la liste..");
        }
    }

}());