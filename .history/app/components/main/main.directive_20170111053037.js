(function() {
    'use strict';

    angular
        .module('app.main')
        .directive('directive', directive);


    /** @ngInject */
    function directive(Dependencies) {

        function directiveController() {
            var vm = this;

            init();

            function init() {

            }
        }

        function link() {

        }

        return {
            bindToController: true,
            controller: directiveController,
            controllerAs: 'Ctrl',
            link: link,
            restrict: 'AE',
            scope: {},
        }
    }

}());