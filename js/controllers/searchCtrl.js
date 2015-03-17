angular.module('reel-seek').controller('searchCtrl', ['$scope', '$log', 'omdbService', function($scope, $log, omdbService){
  $scope.result = null;

  $scope.record = function(title, year){
    omdbService.findMovieByName(title,function(error, result){
    if(error){
      return ;
    }

    $scope.result = result;

    });
  };

}]);
