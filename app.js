var attendance = angular.module('attendance', ['ui.router']);

//Sign in partial link
attendance.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '',
    templateUrl: "partials/home.html"
  });

  //Make a state that will display a list of students
  //and allow students to sign in.
  $stateProvider.state('students', {
    url:"/signIn",
    templateUrl:"partials/signIn.html",
    controller: 'StudentsCtrl'
  });

  //Make a state for the instructor to see who is here.
  $stateProvider.state('teacher', {
    url: "/whoIsHere",
    templateUrl: "partials/whoIsHere.html",
    controller: 'TeacherCtrl'
  });

});
