(function() {
    'use strict';

    angular
        .module('app.main')
        .filter('Filter', Filter)

    function Filter() {

        return FilterFn;

        function FilterFn(Params) {

            return Params
        }
    }

}());