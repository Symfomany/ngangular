(function () {
    'use strict';

    angular
        .module('app.main')
        .filter('ago', Filter);


    function Filter() {
        return FilterFilter;

        ////////////////

        function FilterFilter(timestamp) {
            var d = new Date(timestamp * 1000);
            return d.getDate() + 1 + '/' + d.getMonth() + '/' + d.getFullYear() + " à  " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

        }
    }
})();