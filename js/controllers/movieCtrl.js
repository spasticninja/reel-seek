angular.module('reel-seek').controller('movieCtrl', ['$scope', '$log', 'grabIdService', 'omdbService', function($scope, $log, grabIdService, omdbService){
  $scope.result = null;
  //service call to find the IMDb ID that was put in url
  var id = grabIdService.grabMovieId();

  //service call to find movie with IMDb ID
  omdbService.findMovieById(id, 'full', 'true', function(error, result){
  if(error){
    return ;
  }

  //store result
  $scope.result = result;
  //there should not be an error, but if there is note it
  $scope.oops = result.Error;
  });
}]);
