angular.module('reel-seek').controller('searchCtrl', ['$scope', '$log', 'omdbService', function($scope, $log, omdbService){
  $scope.result = null;
  $scope.searching = false;

  //form function
  $scope.record = function(title, year){
    $scope.searching=true;
    //If year is filled in, find specific movie. If no year present, use search.
    if (year != null){
      //service call to find specific movie
      omdbService.findMovieByNameAndYear(title, year, 'short', function(error, result){
      $scope.searching=false;
      if(error){
        return ;
      }

      //result stored
      $scope.result = result;
      //error result (will be undefined if there is no error)
      $scope.oops = result.Error;
      });
    }else{
      //service call to search movie (returns multiple results with only title, year, type, and IMDb ID)
      omdbService.searchMovieByName(title, function(error, result){
        $scope.searching=false;
        if(error){
          return ;
        }

        //result stored
        $scope.result = result;
        //error result (will be undefined if there is no error)
        $scope.oops = result.Error;
      });
    }
  };

}]);
