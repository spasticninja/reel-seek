//movie listing directive for the long listing on Movie Page
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
