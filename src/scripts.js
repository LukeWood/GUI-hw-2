// Helpful jQuery cheatsheet at https://oscarotero.com/jquery/

class Course {
    constructor(number, title, sections) {
        // assign values passed in to this
    }
}

class Section {
    constructor(number, instructor, schedule, location) {
        // assign values passed in to this
    }
}

class Registration {
    constructor(course, title, section, instructor, schedule, location) {
        // assign values passed in to this
    }
}

var courseCatalog;
var controls;
var lists;
var events;

window.onload = function () {

    courseCatalog = [
        new Course("CSE3330", "DATABASE CONCEPTS", [
            new Section("342", "Steve Labova", "TuTh 11:00AM - 12:20PM", "Junkins Building 0112"),
            new Section("334", "Matthew Mathis", "W 8:00AM - 9:50AM", "Caruth Hall 0110"),
            new Section("311", "Steve Labova", "MW 11:00AM - 12:20PM", "Junkins Building 0112"),
        ]),
        new Course("CSE3339", "INFORMATION ASSURANCE AND SECURITY", [
            new Section("331", "Karen McBride", "W 8:00AM - 9:50AM", "Junkins Building 0132"),
            new Section("421", "Steve Labova", "TuTh 11:00AM - 12:20PM", "Caruth Hall 0101"),
            new Section("441", "John Stanton", "TuTh 3:30PM - 4:50PM", "Embrey Engineering Bldg 0102"),
        ]),
        new Course("CSE3342", "PROGRAMMING LANGUAGES", [
            new Section("513", "Darren Jenson", "M 5:00PM - 6:50PM", "Embrey Engineering Bldg 0129"),
            new Section("541", "Karen McBride", "MW 3:30PM - 4:50PM", "Junkins Building 0222"),
            new Section("204", "Karen McBride", "TuTh 3:30PM - 4:50PM", "Caruth Hall 0210"),
        ]),
        new Course("CSE3345", "GRAPHICAL USER INTERFACE DESIGN AND IMPLEMENTATION", [
            new Section("421", "Tina Dolan", "TuTh 1:00PM - 3:20PM", "Embrey Engineering Bldg 0111"),
            new Section("532", "Matthew Mathis", "MW 5:00PM - 6:20PM", "Embrey Engineering Bldg 0232"),
            new Section("546", "Darren Jenson", "W 5:00PM - 6:50PM", "Junkins Building 0112"),
        ]),
        new Course("CSE3353", "FUNDAMENTALS OF ALGORITHMS", [
            new Section("456", "Tina Dolan", "MW 5:00PM - 6:30PM", "Caruth Hall 0221"),
            new Section("564", "Karen McBride", "MW 1:00PM - 3:20PM", "Caruth Hall 0221"),
            new Section("556", "Matthew Mathis", "W 5:00PM - 6:50PM", "Caruth Hall 0284"),
        ]),
        new Course("CSE3365", "INTRODUCTION TO SCIENTIFIC COMPUTING", [
            new Section("353", "Tina Dolan", "TuTh 5:00PM - 6:20PM", "Caruth Hall 0484"),
            new Section("327", "John Stanton", "W 1:00PM - 3:50PM", "Caruth Hall 0484"),
            new Section("395", "Tina Dolan", "TuTh 1:00PM - 3:20PM", "Caruth Hall 0484"),
        ]),
    ];

    controls = {
        fallRegistrationTableBody: $('XXX'), // apply selector for fall registation table body
        springRegistrationTableBody: $('XXX'), // apply selector for spring registation table body
        noFallRegistrationMessage: $('XXX'), // apply selector for no fall registation message
        noSpringRegistrationMessage: $('XXX'), // apply selector for no spring registation message
        semesterField: $('XXX'), // apply selector for semester field (select)
        courseField: $('XXX'), // apply selector for course field (select)
        sectionField: $('XXX') // apply selector for section field (select)
    };

    lists = {
        fall: [],
        spring: []
    };

    events = {
        onRegistrationChange: () => { // this method will be called from JavaScript below
            var bindTable = (list, tableBody, noItemMessage) => {
                var result = '';

                list.forEach(registration => {
                    // build html row using string interpolation
                });

                // use tableBody.html method to assign result

                // if list.length, hide noItemMessage (use hide method) and show tableBody's parent (use parent method)
                // else show noItemMessage (use show method) and hide tableBody's parent (use parent method)
            };

            // call bindTable w/ list.fall, controls.fallRegistrationTableBody and controls.noFallRegistrationMessage
            // do same for spring
        },
        onSemeseterChange: () => { // this method needs to be called from html at the appropriate time. Don't forget "events."
            var result = '<option></option>'; // this ensures empty default option

            courseCatalog.forEach((c, i) => {
                // c = course, i = index
                // use string interpolation to add course option to result string
                // format: <option value="0">CSE3345 - GRAPHICAL USER INTERFACE DESIGN AND IMPLEMENTATION</option>
                // (0 = i)
            });

            // set result to controls.courseField.html
        },
        onCourseChange: () => { // this method needs to be called from html at the appropriate time. Don't forget "events."
            var result = '<option></option>'; // this ensures empty default option

            var courseIndex = +controls.courseField.val();
            var course = undefined; // instead of undefined, use courseIndex to assign to the right course in the courseCatalog array

            course.sections.forEach((s, i) => {
                // s = section, i = index
                // use string interpolation to add section option to result string
                // format: <option value="0">TuTh 11:00AM - 12:20PM (Steve Labova)</option>
                // (0 = i)
            });

            // set result to controls.sectionField.html
        },
        onAddCourseClick: () => { // this method needs to be called from html at the appropriate time. Don't forget "events."
            var semesterIndex = undefined; // instead of undefined, retreive val from controls.semesterField (use + to convert string to number)
            var courseIndex = undefined; // instead of undefined, retreive val from controls.courseField (use + to convert string to number)
            var sectionIndex = undefined; // instead of undefined, retreive val from controls.sectionField (use + to convert string to number)

            var course = undefined; // instead of undefined, use courseIndex to assign to the right course in the courseCatalog array
            var section = undefined; // instead of undefined, use sectionIndex to assign to the right section in the course.sections array

            var registration = new Registration(); // populate arguments of contructor from course and section

            // switch on semesterIndex
            // if 0, add registation to lists.fall
            // if 1, add registation to lists.spring

            // call event.onRegistrationChange

            // use val method to set value of controls.semesterField to '', thereby clearing selection
            // do the same for courseField and sectionField
        }
    };

    // call event.onRegistrationChange to do initial binding, showing and hiding
}
