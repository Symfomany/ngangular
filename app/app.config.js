(function () {
    'use strict';

    angular
        .module('app', [
            'LocalStorageModule'
        ])
        .config(configuration);

    function configuration() {
        console.log("olaa...")
        localStorageServiceProvider
            .setPrefix('yourAppName')
            .setStorageType('sessionStorage');
        $locationProvider.html5Mode(true);
    }

} ());