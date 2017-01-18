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
            one: one,
            add: add,
            plus: plus,
            moins: moins
        };

        return service;



        /**
         * All Personnages
         * 
         */

        function all() {
            var defer = $q.defer(); // crée un timeout 

            $http.get('./data/personnages.json', { cache: true }).then(function(reponse) {
                defer.resolve(reponse.data.data);
            });

            return defer.promise;
        }

        /**
         * Get One Object
         */
        function one(id) {
            return this.all().then(function(reponse) {
                var obj = reponse.find(function(personnage) {
                    return personnage.id == id;
                });

                return obj;
            })
        }

        /**
         * Add a item
         */
        function add(tab, item) {
            console.log(item);
            item.created = new Date().getTime();
            item.id = tab.length;
            tab.push(item);
            return tab;
        }

        /**
         * Remove Item
         */
        function remove(tab, item) {
            var index = tab.indexOf(item);
            tab.splice(index, 1);
            return tab;
        }


        /**
         * Plus Item
         */
        function plus(tab, item) {
            item.like++;
            var index = tab.indexOf(item);
            tab[index] = item;
            return tab;
        }


        /**
         * Moins Item
         */
        function moins(tab, item) {
            item.dislike++;
            var index = tab.indexOf(item);
            tab[index] = item;
            return tab;
        }
    }
})();