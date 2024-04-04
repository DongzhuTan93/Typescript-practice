abstract class Shape { // abstract is not fininsh class
    constructor (public color: string ) {
        
    }
    
    abstract render(): void // abstract method can only exist inside abstract class
    
}

class Circle extends Shape {
    constructor (public radius: number, color: string) {
        super (color)
    }

    override render(): void {
        console.log('Rendering a circle')
    }
}

let shape = new Shape('red')
shape.render()

