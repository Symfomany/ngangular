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
        vm.title = "Je suis un Titre";

        init();

        function init() {
            console.log("1er controlleur done ! ");
            vm.anotherTitle = "Je suis le 1er titre";
        }

    }

}());