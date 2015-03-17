angular.module('reel-seek').service('omdbService', ['$http', function($http){
  this.findMovieByName = function(name, length, callback){
    $http.get('http://www.omdbapi.com/?', {
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
  this.findMovieByNameAndYear = function(name, year, length, callback){
    $http.get('http://www.omdbapi.com/?', {
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

  this.findMovieById = function(id, callback){
    $http.get('http://www.omdbapi.com/?', {
      params: {
        'i': id,
        'plot' : full
      }
    }).success(function(data, status, headers, config){
      callback(null, data);
    }).error(function(data, status, headers, config){
      callback(data||status,null);
    });
  };
}]);
