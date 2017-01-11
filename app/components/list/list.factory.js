(function() {
    'use strict';

    angular
        .module('app.main')
        .factory('Factory', Factory)

    /** @ngInject */
    function Factory(Dependencies) {

        return {
            fn: fn
        }

        function fn() {

        }
    }

}());