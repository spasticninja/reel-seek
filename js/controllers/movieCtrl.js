angular.module('reel-seek').controller('movieCtrl', ['$scope', '$log', 'grabIdService', 'omdbService', function($scope, $log, grabIdService, omdbService){
  $scope.result = null;
  var id = grabIdService.grabMovieId();
  console.log(id);

  omdbService.findMovieById(id, function(error, result){
  if(error){
    return ;
  }
  console.log(result);
  $scope.result = result;
  $scope.oops = result.Error;
  });
}]);
