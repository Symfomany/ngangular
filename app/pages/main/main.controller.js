(function () {
    'use strict';

    angular
        .module('app.main', ['LocalStorageModule', 'rzModule'])
        .controller('MainCtrl', MainController);

    MainController.$inject = ['$log', '$scope', '$http', '$rootScope', '$window', '$interval', '$timeout', '$filter', '$q', 'localStorageService'];

    function MainController($log, $scope, $http, $rootScope, $window, $interval, $timeout, $filter, $q, localStorageService) {

        var vm = this;
        vm.subtitle = "Je m'appelle Julien";
        vm.reset = reset;
        vm.majuscule = majuscule;
        vm.tableau = [];
        vm.nbPersonnages;
        vm.remove = remove;
        vm.add = add;
        vm.pseudoAdd = "";
        vm.limit = 0;
        vm.optionsRz = {
            value: 16,
            min: 1,
            max: 100,
            options: {
                floor: 0,
                ceil: 450
            }
        };

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
            localStorageService.set('title', vm.title);
        });


        function remove(personnage) {
            var index = vm.tableau.indexOf(personnage);
            vm.tableau.splice(index, 1);
        }

        function add() {
            vm.tableau.push({
                pseudo: vm.pseudoAdd
            });
            vm.pseudoAdd = "";

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