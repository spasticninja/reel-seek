'use strict';

angular.module('reel-seek', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/', {
      templateUrl: 'views/landing.html', //landing page or "home"
      controller: 'landingCtrl'
    }).
    when('/search', {
      templateUrl: 'views/search.html', //search page
      controller: 'searchCtrl'
    }).
    when('/movie/:movieId', {
      templateUrl: 'views/movie.html', //movie page where each movie has a unique ID (the IMDb ID)
      controller: 'movieCtrl'
    }).
    otherwise({
      redirectTo: '/search' //redirect to search page if something goes wrong
    });
}]);
