(function() {
    angular.module('app.main', []);
    'use strict';

    angular
        .module('app.main')
        .controller('MainCtrl', ListCtrl);

    ListCtrl.$inject = ['$log', '$scope'];

    /** @ngInject */
    function ListCtrl($log, $scope) {
        /* jshint validthis: true */
        var vm = this;
        init();

        function init() {
            console.log("Ici la liste..");
        }

        function formattage() {
            vm.title = vm.title.trim().toLowerCase();
        }


        /**
         * Watch for title
         * PS: Create watches with caution as they add more load to the digest cycle
         */
        $scope.$watch('main.title', function(current, original) {
            $log.info('main.title was %s', original);
            $log.info('main.title is now %s', current);
        });

    }

}());