class SeatAssigment {
    // A1, A2,...
    // Dong, Leo..


    // A1: string;
    // A2: string;  'Dong'

    // Index singnature property, with this we can create the property dynamically and we also get type checking/ type safety
    [seatNumber: string]: string
}


let seats = new SeatAssigment()
seats.A1 = 'Dong'
seats.A2 = 'Leo' // now we have another way to access a property
seats.A3 = 1 // type safety

