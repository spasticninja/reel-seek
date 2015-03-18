angular.module('reel-seek').controller('landingCtrl', ['$scope', '$log', 'omdbService', function($scope, $log, omdbService){
  //I chose marvel movies, but this is where a top 10 list could go or whatever.
  var marvelPreview=['tt0371746','tt0800080','tt1228705','tt0800369','tt0458339','tt0848228','tt1300854', 'tt1981115','tt1843866','tt2015381','tt2395427'];
  $scope.result=[];

  omdbService.findMovieById(marvelPreview, 'short', 'false', function(error, result){
    if(error){
      return ;
    }

    //store result
    $scope.result = result;
    //there should not be an error, but if there is note it
    $scope.oops = result.Error;
  });

}]);
