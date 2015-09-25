attendance.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
    // Go to Factory
    $scope.students = StudentsFactory.students;
    $scope.StudentsFactory = StudentsFactory;

    //Methods
    $scope.signIn = function(student) {
        student.signedIn = true;
    };

    $scope.signOut = function(student) {
        student.signedOut = true;
    };
});
