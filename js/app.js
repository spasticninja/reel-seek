angular.module('reel-seek', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/', {
      templateUrl: '/views/landing.html',
      controller: 'landingCtrl'
    }).
    when('/search', {
      templateUrl: '/views/search.html',
      controller: 'searchCtrl'
    }).
    when('/movie/:movieId', {
      templateUrl: '/views/movie.html',
      controller: 'movieCtrl'
    }).
    otherwise({
      redirectTo: '/search'
    });
}]);
