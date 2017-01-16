(function() {
    angular.module('app.main', []);
    'use strict';

    angular
        .module('app.main')
        .controller('MainCtrl', MainCtrl);

    dataservice.$inject = [$log, $scope];

    /** @ngInject */
    function MainCtrl() {
        /* jshint validthis: true */
        var vm = this;
        vm.title = "Je suis le 1er Titre!";
        vm.formattage = formattage;
        //

        init();

        function init() {
            console.log("1er controlleur done ! ");
            vm.anotherTitle = "Je suis le second titre";
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