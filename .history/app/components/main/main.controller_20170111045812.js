(function() {
    angular.module('app.main', []);
    'use strict';

    angular
        .module('app.main')
        .controller('MainCtrl', MainCtrl);

    /** @ngInject */
    function MainCtrl() {
        var vm = this;

        init();

        function init() {
            console.log("1er controlleur done ! ");
        }

    }

    var elt = "ok"

}());

console.log(elt);