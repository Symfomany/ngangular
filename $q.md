

        /**
         *  Promesses avec $Q
         */ 
        // var promesse = $q(function (resolve, reject) {
        //     $timeout(function () {
        //         resolve(666);
        //     }, 2000);
        // });
        // promesse.then(function (reponse) {
        //     $log.warn(reponse);
        // });
        // var promesseTwo = $q(function (resolve, reject) {
        //     $timeout(function () {
        //         resolve(2);
        //     }, 2000);
        // });
        // var promesseThree = $q(function (resolve, reject) {
        //     $timeout(function () {
        //         resolve(3);
        //     }, 1000);
        // });

        // function requestOkText(url) {
        //     var request = new XMLHttpRequest();
        //     var deferred = $q.defer();

        //     request.open("GET", url, true);
        //     request.onload = onload;
        //     request.onerror = onerror;
        //     request.onprogress = onprogress;
        //     request.send();

        //     function onload() {
        //         if (request.status === 200) {
        //             deferred.resolve(request.responseText);
        //         } else {
        //             deferred.reject(new Error("Status code was " + request.status));
        //         }
        //     }

        //     function onerror() {
        //         deferred.reject(new Error("Can't XHR " + JSON.stringify(url)));
        //     }

        //     function onprogress(event) {
        //         deferred.notify(event.loaded / event.total);
        //     }

        //     return deferred.promise;
        // }

        // var myPromise = requestOkText("https://jsdfsfsdfsdsonplaceholder.typicode.com/photos").then(function(reponse) {
        //     $log.info(reponse);
        // }, function(reason) {
        //     $log.error(reason);
        // });

        // var resultat = $q.all([
        //     promesseTwo,
        //     promesseThree
        // ]).then(function (reponse) {
        //     console.log(reponse);
        // })

        // $log.info("MainCtrl est chargé");
        // $log.info($window.screenX);


        // $interval(function() {
        //     $log.warn('Force Awaken')
        // }, 2000);