(function() {
    'use strict';

    angular
        .module('app.main', ['LocalStorageModule', 'rzModule'])
        .controller('MainCtrl', MainController);

    MainController.$inject = ['$log', '$scope', '$filter', 'localStorageService', 'personnages', 'PersonnageFactory', 'APIS'];

    function MainController($log, $scope, $filter, localStorageService, personnages, PersonnageFactory, APIS) {


        var vm = this;

        vm.reset = reset;
        vm.majuscule = majuscule;
        vm.tableau = [];
        vm.remove = remove;
        vm.add = add;
        vm.pseudoAdd = "";
        vm.limit = 16;
        vm.optionsRz = {
            floor: 0,
            ceil: 30
        };
        vm.tableau = personnages;
        vm.objAdd = {};
        vm.title = localStorageService.get('title') ? localStorageService.get('title') : "";
        vm.nbCar = vm.title.length;
        vm.plus = plus;
        vm.moins = moins;




        $scope.$watch('main.title', function(old, current) {
            vm.nbCar = vm.title.length;
            localStorageService.set('title', vm.title);
        });

        // Les constantes sont bien chargées
        console.info(APIS.USERS, APIS.PHOTOS, APIS.POSTS);

        function remove(personnage) {
            vm.tableau = PersonnageFactory.remove(vm.tableau, personnage);
        }

        function plus(personnage) {
            vm.tableau = PersonnageFactory.plus(vm.tableau, personnage);
        }

        function moins(personnage) {
            vm.tableau = PersonnageFactory.moins(vm.tableau, personnage);
        }

        function add() {
            vm.tableau = PersonnageFactory.add(vm.objAdd);
            vm.objAdd = {
                pseudo: "",
                note: "",
                resume: ""
            };

            if (vm.tableau.length >= 15) {
                vm.tableau = $filter('limit')(vm.tableau, 10);
            }
        }

        function reset() {
            vm.title = "";
        }

        function majuscule() {
            vm.title = vm.title.toUpperCase();
        }

    }
})();