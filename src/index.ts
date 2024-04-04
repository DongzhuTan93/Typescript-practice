class Ride {
    // passaanger
    // pickupLocation
    // dropOffLocation

    activeRides: number = 0

    start () { this.activeRides++    }
    stop () { this.activeRides--     }
}

let ride1 = new Ride()
ride1.start()

let ride2 = new Ride()
ride2.start()

console.log(ride1.activeRides)
console.log(ride2.activeRides)