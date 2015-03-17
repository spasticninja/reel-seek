angular.module('reel-seek').controller('landingCtrl', ['$scope', '$log', 'omdbService', function($scope, $log, omdbService){

  $scope.result=null;

  omdbService.findMovieByName('Iron Man',function(error, result){
    if(error){
      return ;
    }

    $scope.result=result;
  });
}]);
