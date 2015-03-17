angular.module('reel-seek').service('grabIdService', ['$location', function($location){
  this.grabMovieId = function(){
    var ID = $location.path().split('/');
    return ID[2];
  };
}]);
