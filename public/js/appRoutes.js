var bsApp = angular.module('bsApp', ['ngRoute'])
  bsApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/songs', {
        templateUrl: 'views/song.html',
        controller: 'SongController'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }]);
