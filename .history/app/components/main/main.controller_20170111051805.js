(function() {
    angular.module('app.main', []);
    'use strict';

    angular
        .module('app.main')
        .controller('MainCtrl', MainCtrl);

    /** @ngInject */
    function MainCtrl() {
        /* jshint validthis: true */
        var vm = this;

        init();

        function init() {
            console.log("1er controlleur done ! ");
            vm.title = "Je suis le 1er titre";
        }

    }

}());