attendance.factory('StudentsFactory', function StudentsFactory() {
    var factory = {};

    //Hard code some students
    //No making of students so more like a warehouse.
    factory.students = [
        {
            name: 'Goon Crowley',
            signedIn: false,
            signedOut: false
        },
        {
            name: 'Ricky Bobby',
            signedIn: false,
            signedOut: false
        },
        {
            name: 'Joe-Kyle McFarland',
            signedIn: false,
            signedOut: false
        },
        {
            name: 'Calien Gamalien McPike IV',
            signedIn: false,
            signedOut: false
        },
        {
            name: 'Tabatha Linn',
            signedIn: false,
            signedOut: false
        },
        {
            name: 'Mertin Dingle',
            signedIn: false,
            signedOut: false
        },
        {
            name: 'Tommy Dawkins',
            signedIn: false,
            signedOut: false
        },
        {
            name: 'Fats Domino',
            signedIn: false,
            signedOut: false
        },
        {
            name: 'Sarah Fabton',
            signedIn: false,
            signedOut: false
        },
    ];

    return factory;
});
