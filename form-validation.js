var validationApp = angular.module('validationApp', []);

validationApp.controller('mainController', ['$scope', function($scope) {
  $scope.users = [];
  $scope.submitForm = function(isValid) {
    // check to make sure the form is completely valid
    if (isValid) {
      $scope.users.push($scope.user);
      $scope.user = {};
    }
  };
}]);
