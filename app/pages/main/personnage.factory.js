(function() {
    'use strict';

    angular
        .module('app.main')
        .factory('PersonnageFactory', PersonnageFactory);

    PersonnageFactory.$inject = ['$http', '$q'];
    function PersonnageFactory($http, $q) {
        var service = {
            all: all,
            remove: remove,
            one: one
        };

        return service;


        function one(id) {
            return this.all().then(function(reponse) {
                var obj = reponse.find(function(personnage) {
                    return personnage.id == id;
                });

                return obj;
            })
        }

        function all() {
            var defer = $q.defer(); // crée un timeout 

            $http.get('./data/personnages.json', { cache: true }).then(function(reponse) {
                defer.resolve(reponse.data.data);
            });

            return defer.promise;
        }


        function remove(tab, item) {
            var index = tab.indexOf(item);
            tab.splice(index, 1);
            return tab;
        }
    }
})();