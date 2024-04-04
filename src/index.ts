/*abstract class Calendar {
    constructor(public name: string) {}

    abstract  addEvent(): void
    abstract removeEvent(): void
}*/


interface Calendar { // interface is a simpler abstract class? usinf interface we can describe the shape of en object
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