var attendence = angular.module('signIn', ['ui.router']);

signIn.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  //Make a state that will display a list of students
  //and allow students to sign in.
  $stateProvider.state('', {
    url:"/students",
    templateUrl:"partials/signIn.html",
    controller: 'StudentsCtrl'
  });

  //Make a state for the instructor to see who is here.
  $stateProvider.state('', {
    url: "/teacher",
    templateUrl: "partials/whoIsHere.html",
    controller: 'TeacherCtrl'
  });

});
