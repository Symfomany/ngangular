(function() {
    'use strict';

    angular
        .module('app.detail', ['app.main'])
        .controller('DetailCtrl', DetailController);

    DetailController.$inject = ['PersonnageFactory', 'personnage'];
    function DetailController(PersonnageFactory, personnage) {
        var vm = this;
        vm.remove = remove;
        vm.elt = personnage;

        function remove() {
            PersonnageFactory.remove(vm.tableau, personnage);
        }



    }
})();