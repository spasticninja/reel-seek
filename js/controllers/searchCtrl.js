angular.module('reel-seek').controller('searchCtrl', ['$scope', '$log', 'omdbService', function($scope, $log, omdbService){
  $scope.result = null;

  $scope.record = function(title, year){
    if (year != null){
      omdbService.findMovieByNameAndYear(title, year, 'short', function(error, result){
      if(error){
        return ;
      }

      $scope.result = result;
      $scope.oops = result.Error;
      });
    }else{
      omdbService.findMovieByName(title, 'short', function(error, result){
      if(error){
        $scope.error = result;
        return ;
      }

      $scope.result = result;
      $scope.oops = result.Error;
      });
    }
  };

}]);
