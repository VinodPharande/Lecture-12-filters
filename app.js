(function(){
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', MsgController);
  // 1. Attach $inject property to the function obejct more effidient way
  MsgController.$inject = ['$scope','$filter'];

  function MsgController($scope,$filter) {
    $scope.message = "Vinod";
    $scope.stateOfBeing = "registration";
    $scope.registrationCost = 25.456;

    $scope.displayMessage = function () {
      var msg = "Your Registration has been done successfully...!";
      // use of filter in controller
      var output = $filter('uppercase')(msg);
      return output;
    }

    $scope.feedMessage = function(){
      $scope.stateOfBeing = "registrationdone";
    }
  }
})();
