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
    $scope.name = '';
    $scope.adjective = '';
    $scope.pluralNoun1 = '';
    $scope.pluralNoun2 = '';
    $scope.insect = '';
    $scope.pluralNoun3 = '';
    $scope.verb = '';
  };
  $scope.submit = function() {
    $scope.boysName = this.name;
  };
});

app.controller('buggyExerciseParent', function($scope) {
  $scope.momName = 'Lisa';
});

app.controller('buggyExerciseFix', function($scope) {
  $scope.view = {};
  $scope.view.momName = 'Lisa';
});

app.controller('numberPicker', function($scope) {
  $scope.view = {};
  $scope.pickRandomNumber = function() {
    $scope.view.number = Math.floor(Math.random() * 10) + 1;
  };
});

app.controller('wordReverser', function($scope) {
  $scope.view = {};
  $scope.reverseWord = function(string) {
    string = string.split('').reverse().join('');
    $scope.view.word = string;
  };
});

app.controller('ping-pong', function($scope) {
  $scope.view = {};
  $scope.view.showMe;
  $scope.view.player1Score = 0;
  $scope.view.player2Score = 0;
  $scope.view.totalPoints = 0;
  $scope.player1Increment = function() {
    $scope.view.player1Score++;
    $scope.view.totalPoints++;
    if( $scope.view.totalPoints === 2 || $scope.view.totalPoints === 6 || $scope.view.totalPoints === 10 ) {
      $scope.view.show1 = true;
      $scope.view.show2 = false;
    } else if ( $scope.view.totalPoints === 4 || $scope.view.totalPoints === 8 || $scope.view.totalPoints === 11 ) {
      $scope.view.show1 = false;
      $scope.view.show2 = true;
    }
  };
  $scope.player2Increment = function() {
    $scope.view.player2Score++;
    $scope.view.totalPoints++;
    if( $scope.view.totalPoints === 2 || $scope.view.totalPoints === 6 || $scope.view.totalPoints === 10 ) {
      $scope.view.show1 = true;
      $scope.view.show2 = false;
    } else if ( $scope.view.totalPoints === 4 || $scope.view.totalPoints === 8 || $scope.view.totalPoints === 11 ) {
      $scope.view.show1 = false;
      $scope.view.show2 = true;
    }
  };
  $scope.reset = function() {
    $scope.view.player1Score = 0;
    $scope.view.player2Score = 0;
    $scope.view.totalPoints = 0;
  };
});

app.controller('mouse-enter', function($scope, $timeout) {
  $scope.view = {};
  $scope.view.enterCount = 0;
  $scope.view.colorArray = [];
  $scope.view.randomColor = function() {
    var x = Math.round(0xffffff * Math.random()).toString(16);
    var y = (6-x.length);
    var z = "000000";
    var z1 = z.substring(0,y);
    var color = "#" + z1 + x;
    $scope.view.colorArray.unshift(color);
    return color;
  };
  var Counter = function () {
    var i = 0;
    return function() {
      return i += 1;
    };
  };
  var incrementer = new Counter();
  var replaying = false;
  $scope.replay = function() {
    var displayPrevColor = function() {
      $scope.view.myStyle = {'background-color': $scope.view.colorArray[incrementer()] };
      replaying = false;
      $timeout(displayPrevColor, 1000);
    };
    if (!replaying) {
      replaying = true;
      $timeout(function() { displayPrevColor(); }, 500);
    }
  };
});

app.controller('formExercise1', ['$scope', function($scope) {
  $scope.submitAddressForm = function() {
    $scope.addressFormShow = angular.copy($scope.addressForm);
    $scope.addressForm = {};
  };
}]);

app.controller('contactApp', ['$scope', function($scope) {
  $scope.contacts = [];
  $scope.submitContactForm = function() {
    $scope.contacts.push($scope.contactForm);
    $scope.contactForm = {};
  };
}]);
