attendance.controller('TeacherCtrl', function TeacherCtrl($scope, StudentsFactory) {
    //Just pulls the data from the factory to then list out on the 'Who is here' page.
    $scope.students = StudentsFactory.students;
    $scope.StudentsFactory = StudentsFactory;
});
