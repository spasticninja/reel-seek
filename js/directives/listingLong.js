//movie listing directive for the long listing on Movie Page
angular.module('reel-seek').directive('listingLong', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      movie: '=movie'
    },
    templateUrl: '/views/partials/movieListingLong.html'
  };
});
