(function () {
    'use strict';

    angular
        .module('app.main')
        .filter('limit', Filter);

    function Filter() {
        return FilterFilter;

        ////////////////

        function FilterFilter(tab, nb) {
            if (angular.isUndefined(nb)) {
                return tab;
            }
            return tab.slice(0, nb);
        }
    }
})();