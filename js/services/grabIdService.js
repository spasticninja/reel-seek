//Service to find IMDb ID that is in /movie/id
angular.module('reel-seek').service('grabIdService', ['$location', function($location){
  this.grabMovieId = function(){
    //uses location to grab path and split results based on the number of '/'
    var ID = $location.path().split('/');
    //return the second result (which should always be the IMDb Id)
    return ID[2];
  };
}]);
