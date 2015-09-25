var attendence = angular.module('signIn', ['ui.router']);

signIn.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('', {
    url:"/students",
    templateUrl:"partials/signIn.html",
    controller: 'StudentsCtrl'
  });

  $stateProvider.state('', {
    url: "/teacher",
    templateUrl: "partials/whoIsHere.html",
    controller: 'TeacherCtrl'
  });

});
