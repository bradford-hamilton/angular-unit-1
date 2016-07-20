var animateApp = angular.module('animateApp',['ngAnimate']);

animateApp.controller('MainController', ['$scope', function($scope) {
  $scope.view = {};
  $scope.view.instructors = ["Tim", "Ian", "Matt", "Elie"];
}]);
