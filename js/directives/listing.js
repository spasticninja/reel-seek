//movie listing directive for the short summary on search page
angular.module('reel-seek').directive('listing', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      movie: '=movie'
    },
    templateUrl: '/views/partials/movieListing.html'
  };
});
