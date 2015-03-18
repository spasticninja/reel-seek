angular.module('reel-seek').service('omdbService', ['$http', function($http){
  //Service to find movie by specific name, can change the description length when called
  this.findMovieByName = function(name, length, callback){
    $http.get('http://www.omdbapi.com/?', {
      cache: true,
      params: {
        't': name,
        'plot' : length
      }
    }).success(function(data, status, headers, config){
      callback(null, data);
    }).error(function(data, status, headers, config){
      callback(data||status,null);
    });
  };
  //Service to find movie by both name and year, can change description length when called
  this.findMovieByNameAndYear = function(name, year, length, callback){
    $http.get('http://www.omdbapi.com/?', {
      cache: true,
      params: {
        't': name,
        'y': year,
        'plot' : length
      }
    }).success(function(data, status, headers, config){
      callback(null, data);
    }).error(function(data, status, headers, config){
      callback(data||status,null);
    });
  };
  //Service to search for a film (can get multiple results)
  this.searchMovieByName = function(name, callback){
    $http.get('http://www.omdbapi.com/?', {
      params: {
        's': name
      }
    }).success(function(data, status, headers, config){
      callback(null, data);
    }).error(function(data, status, headers, config){
      callback(data||status,null);
    });
  };
  //Service to find movie by IMDb ID. This service defaults to get full summary and tomatoe meter ratings
  this.findMovieById = function(id, length, tomatoes, callback){
    $http.get('http://www.omdbapi.com/?', {
      params: {
        'i': id,
        'plot' : length,
        'tomatoes' : tomatoes
      }
    }).success(function(data, status, headers, config){
      callback(null, data);
    }).error(function(data, status, headers, config){
      callback(data||status,null);
    });
  };
}]);
