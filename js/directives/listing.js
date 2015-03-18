//movie listing directive for the short listing on search page
angular.module('reel-seek').directive('listing', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      movie: '=movie'
    },
    templateUrl: 'views/partials/movieListing.html'
  };
});
