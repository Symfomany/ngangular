(function () {
    'use strict';

    angular
        .module('app', [])
        .controller('MainCtrl', function ($log, $scope, $http, $rootScope) {
            $log.info("MainCtrl est chargé");
            var vm = this;
            vm.title = "";
            vm.subtitle = "Je m'appelle Julien";
            vm.reset = reset;
            vm.majuscule = majuscule;
            vm.tableau = [];
            vm.nbPersonnages;

            $http.get('./data/personnages.json', { cache: true }).then(function (response) {
                vm.tableau = response.data.data;
                $rootScope.$broadcast('nbPersonnage', { nbPersonnage: vm.tableau.length });
            });

            setInterval(function () {
                //$scope.$apply(function () {
                vm.subtitle = "Sous-titre changé";
                $scope.$digest();
                // });
            }, 2000);

            $scope.$watch('main.title', function (old, current) {
                $log.info(old, current);
                vm.nbCar = vm.title.length;
            });

            function reset() {
                vm.title = "";
            }

            function majuscule() {
                vm.title = vm.title.toUpperCase();
            }

        })

        .controller("SecondCtrl", function ($scope) {
            var vm = this;
            vm.title = "Second controlleur";
            vm.nbPersos = 0;

            $scope.$on('nbPersonnage', function (event, args) {
                vm.nbPersos = args.nbPersonnage;
            });
        })


        .filter("limit", function () {
            return function (tab, nb) {
                return tab.slice(0, nb);
            }
        });

} ());