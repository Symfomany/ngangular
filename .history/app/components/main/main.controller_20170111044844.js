(function() {
    angular.module('app', ['app.main']);
    'use strict';

    angular
        .module('app.main')
        .controller('MainCtrl', MainCtrl)

    /** @ngInject */
    function MainCtrl(Dependencies) {
        var vm = this;

        init();

        function init() {
            console.log("1er conbtrolleur done ! ");
        }

    }

}());