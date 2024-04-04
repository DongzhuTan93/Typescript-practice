/*abstract class Calendar {
    constructor(public name: string) {}

    abstract  addEvent(): void   // Abstract methods don't have a body
    abstract removeEvent(): void
}*/


interface Calendar { // interface is a simpler abstract class? usinf interface we can describe the shape of en object. Protected members are inherited. Private members are not. 
    name: string
    addEvent(): void
    removeEvent(): void
}


interface CloundCalendar extends Calendar {
    sync(): void
}

class GoogleCalendar implements Calendar {
    constructor(public name: string) {}

    addEvent(): void {
        throw new Error("Method not implemented.")
    }
    removeEvent(): void {
        throw new Error("Method not implemented.")
    }

}