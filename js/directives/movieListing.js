angular.module('reel-seek').directive('movieListing', function(){
  return {
    restrict: 'E',
    scope: {
      movie: '=movie'
    },
    templateUrl: '/views/partials/movieListing.html'
  };
});
