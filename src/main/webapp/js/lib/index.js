'use strict';


angular.module('app', []).controller('MainCtrl', function ($scope, $interval) {
    $scope.obtained = false;
    $scope.alertMessage = "";
    $scope.uuid = "";
    $scope.alert = false;
    $scope.promise = null;
    $scope.alreadyClicked = false;
    $scope.checkCount = 1;
    $scope.buttonDisabled = false;
    $scope.do = function () {
        $scope.obtained = !$scope.obtained;
    } 

});




