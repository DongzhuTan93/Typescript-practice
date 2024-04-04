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

