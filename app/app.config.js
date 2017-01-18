(function() {
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'app.main',
            'app.contact',
            'app.about',
            'app.detail',
            'LocalStorageModule'
        ])
        .config(configuration)
        .config(ConfigRouter);

    function configuration(localStorageServiceProvider, $locationProvider) {
        localStorageServiceProvider
            .setPrefix('yourAppName')
            .setStorageType('sessionStorage');

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }

    function ConfigRouter($stateProvider, $urlRouterProvider) {

        var main = {
            url: '/',
            resolve: {
                personnages: function(PersonnageFactory) {
                    return PersonnageFactory.all();
                },
            },
            templateUrl: './app/pages/main/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        };

        var contact = {
            url: '/contact',
            templateUrl: './app/pages/contact/contact.html',
            controller: 'ContactCtrl',
            controllerAs: 'contact'
        };


        var detail = {
            url: '/detail/:id',
            resolve: {
                personnage: function(PersonnageFactory, $stateParams) {
                    return PersonnageFactory.one($stateParams.id);
                },
            },
            templateUrl: './app/pages/detail/detail.html',
            controller: 'DetailCtrl',
            controllerAs: 'detail'
        }


        var about = {
            url: '/about',
            views: {

                '': {
                    templateUrl: './app/pages/about/about.html',
                    controller: 'AboutCtrl',
                    controllerAs: 'about'
                },

                'another@about': {
                    templateUrl: './app/pages/main/main.html',
                    controller: 'MainCtrl',
                    controllerAs: 'main'
                },

                'contact@about': {
                    templateUrl: './app/pages/contact/contact.html',
                },


            }

        };

        /**
         * Register all states
         */
        $stateProvider.state('main', main);
        $stateProvider.state('contact', contact);
        $stateProvider.state('about', about);
        $stateProvider.state('detail', detail);

        $urlRouterProvider.otherwise('/');

    }

} ());