'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myappApp
 */
var app = angular.module('myApp',[]);
app.controller( 'TableController', function ( $scope ) {
 $scope.cells = contents();
  function contents(){
    var text = ['Take a picture with a bus host',
    2,
    3,
    4,5,6,7,8,9,10,11,12,'Free Square',14,15,16,17,18,19,20,21,22,23,24,25];
   return text;
  }
});

// var app = angular.module('plunker', []);

// app.controller('MainCtrl', function($scope) {
//   $scope.persons = [
//     'Jack',
//     'Jill',
//     'Tom',
//     'Harvey'
//     ];
// });
