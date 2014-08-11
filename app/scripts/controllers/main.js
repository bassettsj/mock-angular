'use strict';

/**
 * @ngdoc function
 * @name angularMockApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularMockApp
 */
angular.module('angularMockApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
