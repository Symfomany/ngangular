(function() {
    'use strict';

    angular.module('app')
        .constant("APIS", {
            "LOCALE": "http://localhost:9000",
            "PHOTOS": "https://jsonplaceholder.typicode.com/photos",
            "POSTS": "https://jsonplaceholder.typicode.com/posts",
            "USERS": "https://randomuser.me/api/?results=100"
        });
})();