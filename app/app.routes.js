(function() {
    'use strict';

    /**
     * UI-Router
     * https://github.com/angular-ui/ui-router/wiki/URL-Routing
     */
    angular
        .module('app', [
            'ui.router',
            'app.main',
            'app.contact',
            'app.about',
        ])
        .config(ConfigRouter);

    function ConfigRouter($stateProvider) {

        var main = {
            url: '',
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

        var about = {
            url: '/about',
            views: {

                '': {
                    templateUrl: './app/pages/about/about.html',
                    controller: 'AboutCtrl',
                    controllerAs: 'about'
                },

                // the child views will be defined here (absolutely named)
                'another@about': {
                    templateUrl: './app/pages/main/main.html',
                    controller: 'MainCtrl',
                    controllerAs: 'main'
                },


            }

        };

        /**
         * Register all states
         */
        $stateProvider.state('main', main);
        $stateProvider.state('contact', contact);
        $stateProvider.state('about', about);
        $stateProvider.state("otherwise", { url: '' })
    }



} ());