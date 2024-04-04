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
class Teacher extends Person {
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
class Principal extends Person {
    get fullName() {
        return 'principal ' + super.fullName;
    }
}
function printNames(people) {
    for (let person of people)
        console.log(person.fullName);
}
printNames([
    new Student(1, 'dong', 'tan'),
    new Teacher('Tan', 'dong'),
    new Principal('Dong', 'zhu')
]);
//# sourceMappingURL=index.js.map