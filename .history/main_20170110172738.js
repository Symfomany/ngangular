(function() {
    'use strict';

    angular
        .module('Module')
        .component("component", component());


    function component() {

        function componentController() {
            var vm = this;

            init();

            function init() {

            }
        }

        return {
            bindings: {},
            controller: componentController,
            controllerAs: ''
        }
    }

}());