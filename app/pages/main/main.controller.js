(function() {
    'use strict';

    angular
        .module('app.main', ['LocalStorageModule', 'rzModule'])
        .controller('MainCtrl', MainController);

    MainController.$inject = ['$log', '$scope', '$http', '$rootScope', '$window', '$interval', '$timeout', '$filter', '$q', 'localStorageService', 'personnages', 'PersonnageFactory'];

    function MainController($log, $scope, $http, $rootScope, $window, $interval, $timeout, $filter, $q, localStorageService, personnages, PersonnageFactory) {

        var vm = this;
        vm.subtitle = "Je m'appelle Julien";
        vm.reset = reset;
        vm.majuscule = majuscule;
        vm.tableau = [];
        vm.nbPersonnages;
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

        // var promesse = $q(function (resolve, reject) {
        //     $timeout(function () {
        //         resolve(666);
        //     }, 2000);
        // });

        // promesse.then(function (reponse) {
        //     $log.warn(reponse);
        // });

        // var promesseTwo = $q(function (resolve, reject) {
        //     $timeout(function () {
        //         resolve(2);
        //     }, 2000);
        // });
        // var promesseThree = $q(function (resolve, reject) {
        //     $timeout(function () {
        //         resolve(3);
        //     }, 1000);
        // });


        // function requestOkText(url) {
        //     var request = new XMLHttpRequest();
        //     var deferred = $q.defer();

        //     request.open("GET", url, true);
        //     request.onload = onload;
        //     request.onerror = onerror;
        //     request.onprogress = onprogress;
        //     request.send();

        //     function onload() {
        //         if (request.status === 200) {
        //             deferred.resolve(request.responseText);
        //         } else {
        //             deferred.reject(new Error("Status code was " + request.status));
        //         }
        //     }

        //     function onerror() {
        //         deferred.reject(new Error("Can't XHR " + JSON.stringify(url)));
        //     }

        //     function onprogress(event) {
        //         deferred.notify(event.loaded / event.total);
        //     }

        //     return deferred.promise;
        // }

        // var myPromise = requestOkText("https://jsdfsfsdfsdsonplaceholder.typicode.com/photos").then(function(reponse) {
        //     $log.info(reponse);
        // }, function(reason) {
        //     $log.error(reason);
        // });

        // var resultat = $q.all([
        //     promesseTwo,
        //     promesseThree
        // ]).then(function (reponse) {
        //     console.log(reponse);
        // })

        // $log.info("MainCtrl est chargé");
        // $log.info($window.screenX);


        // $interval(function() {
        //     $log.warn('Force Awaken')
        // }, 2000);



        setInterval(function() {
            //$scope.$apply(function () {
            vm.subtitle = "Sous-titre changé";
            $scope.$digest();
            // });
        }, 2000);


        $scope.$watch('main.tableau', function(current, old) {
            $log.info(current);
        }, true);

        $scope.$watch('main.title', function(old, current) {
            $log.info(old, current);
            vm.nbCar = vm.title.length;
            localStorageService.set('title', vm.title);
        });


        function remove(personnage) {
            vm.tableau = PersonnageFactory.remove(vm.tableau, personnage);
        }

        function add() {
            vm.tableau.push(vm.objAdd);
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