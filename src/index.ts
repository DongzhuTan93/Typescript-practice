class Person {
    constructor (public firstname: string, public lastname: string) { }

    get fullName() {
        return this.firstname + ' ' + this.lastname
    }

    walk() {
        console.log('Walking')
    }
    
} 

class Student extends Person {
    constructor(public studentID: number, firtName: string, lastName: string) {
        super(firtName, lastName)
    }

    takeTest() {
        console.log('Take a test')
    }
}

let student = new Student (1, 'dong', 'tan')



class Teacher extends Person {
    override get fullName() {
        return 'Professor ' + super.fullName // tell the complier that we have change the method
    }
}

let teacher = new Teacher ('Dong', 'tan')
console.log(teacher.fullName)