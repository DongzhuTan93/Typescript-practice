"use strict";
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    get fullName() {
        return this.firstname + ' ' + this.lastname;
    }
    walk() {
        console.log('Walking');
    }
}
class Student extends Person {
    constructor(studentID, firtName, lastName) {
        super(firtName, lastName);
        this.studentID = studentID;
    }
    takeTest() {
        console.log('Take a test');
    }
}
let student = new Student(1, 'dong', 'tan');
class Teacher extends Person {
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
let teacher = new Teacher('Dong', 'tan');
console.log(teacher.fullName);
//# sourceMappingURL=index.js.map