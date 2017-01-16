'use strict';
(function() {
    'use strict';

    angular
        .module('Module') sss
        .component('component', component())


    function component() {

        function componentController() {
            var vm = this;

            init();

            function init() {
                var ok = true;
                if (ok == true) {

                }
            }
        }

        return {
            bindings: {},
            controller: componentController,
            controllerAs: ''
        }
    }

}());