(function() {
    angular.module('app.main', []);
    'use strict';

    angular
        .module('app.main')
        .controller('MainCtrl', MainCtrl);

    /** @ngInject */
    function MainCtrl($log, $scope) {
        /* jshint validthis: true */
        var vm = this;
        vm.title = "Je suis un Titre";

        init();

        function init() {
            console.log("1er controlleur done ! ");
            vm.anotherTitle = "Je suis le 1er titre";
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