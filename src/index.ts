class Ride {
    // passaanger
    // pickupLocation
    // dropOffLocation

    private static _activeRides: number = 0 // static properties is what we need is a singel or global place where we can keep track of the active rides.
                                   // A static properties is a property that belongs to a class not en object, so we gonna have only one instance of that property in memory
                                // private method to prevent to asign new value to activeRides outside the class

    start () { Ride._activeRides++    } 
    stop () { Ride._activeRides--     }


    static get activeRides() {
        return Ride._activeRides
    }
}



let ride1 = new Ride() // before static method we will get only one same result (1) but we have two active rides even it is two separate objects
ride1.start()

let ride2 = new Ride() // because each object is separate space in memory, so each object is independently tracking the active rides.
ride2.start()

console.log(Ride.activeRides) // now activeRides belongs to ride class not en ride object


// When we make a method or a property static , that property or method becomes part of class and will have only a single instance os them in memory
