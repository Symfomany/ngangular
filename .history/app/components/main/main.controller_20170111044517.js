(function() {
    'use strict';

    angular
        .module('Module')
        .controller('ControllerCtrl', ControllerCtrl)

    /** @ngInject */
    function ControllerCtrl(Dependencies) {
        var vm = this;

        init();

        function init() {
            console.log("1er conbtrolleur done ! ");
        }

    }

}());