
        // 2 moyens pour faire tourner manuellemnt la digestions
         setInterval(function () {
            //$scope.$apply(function () {
            vm.subtitle = "Sous-titre changé";
            $scope.$digest();
            // });
        }, 2000);

        // watcher un tableau
        $scope.$watch('main.tableau', function (current, old) {
            $log.info(current);
        }, true);