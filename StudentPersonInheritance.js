//program in which person class inherite by student class and initialize the parameter name in person class and cource in child class and display the name and cource by creating object of student class

class Person {
    constructor(name) {
        this.name = name;
    }
    displayName() {
        console.log("Name of person = " + this.name);
    }
}

class Student extends Person {
    constructor(name, course) {
        super(name);
        this.course = course;
    }
    displayCourse() {
        console.log("Course of student = " + this.course);
    }
}   
let s1 = new Student("Alice", "Computer Science");
s1.displayName();
s1.displayCourse();

