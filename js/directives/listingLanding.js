//movie listing directive for the landing page
angular.module('reel-seek').directive('listingLanding', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      movie: '=movie'
    },
    templateUrl: 'views/partials/movieListingLanding.html'
  };
});
