(function() {
    'use strict';

    angular
        .module('app.contact', [])
        .controller('ContactCtrl', ContactController);

    ContactController.$inject = ['$scope'];
    function ContactController($scope) {
        var vm = this;

        vm.title = "Second controlleur";
        vm.nbPersos = 0;

        $scope.$on('nbPersonnage', function(event, args) {
            vm.nbPersos = args.nbPersonnage;
        });

    }
})();