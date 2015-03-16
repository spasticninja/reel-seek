angular.module('reel-seek', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: '/views/landing.html',
    controller: 'landingCtrl'
  });
}]);
