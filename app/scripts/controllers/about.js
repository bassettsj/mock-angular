'use strict';

/**
 * @ngdoc function
 * @name angularMockApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularMockApp
 */
angular.module('angularMockApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
