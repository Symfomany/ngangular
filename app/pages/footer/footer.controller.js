(function () {
    'use strict';

    angular
        .module('app.footer', [])
        .controller('FooterCtrl', FooterController);

    FooterController.$inject = [];
    function FooterController() {
        var vm = this;
        vm.liens = ['main', 'about', 'contact']

    }
})();