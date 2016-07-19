var app = angular.module("firstApp", []);

app.controller("MyFirstController", function($scope){
  $scope.name = "Severus Snape";
});

app.controller('ExercisesController', function($scope) {
  $scope.favColor = "Green AND Blue";
  $scope.secondsInACentury = 60 * 60 * 24 * 365 * 10;
  $scope.rightNow = new Date();
});

app.controller('madLibsController', function($scope) {
  $scope.playAgain = function() {
    $scope.boysName = '';
    $scope.adjective = '';
    $scope.pluralNoun1 = '';
    $scope.pluralNoun2 = '';
    $scope.insect = '';
    $scope.pluralNoun3 = '';
    $scope.verb = '';
    return;
  };
});
