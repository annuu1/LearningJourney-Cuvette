// 1. Create an object animal with a property species. Then, create an object dog that inherits from animal. 
// Add a property breed to dog. Log both species and breed from the dog object.

const animal = {
    species : "mammal"
}

let dog = Object.create(animal)
dog.breed = "Labradore"

console.log(`Species : ${dog.species}
Breed : ${dog.breed}`);


// 2. Given a constructor function Car, add a method honk to its prototype that logs "Beep!". 
// Then, create two instances of Car and make both of them call the honk method.


function Car(brand){
    this.brand = brand;

}
Car.prototype.honk = function(){
    console.log(`${this.brand} Beep....`)
    }

let car1 = new Car("Honda")
let car2 = new Car("Toyota")


car1.honk()
car2.honk()


// 3. Using ES6 classes, create a base class Shape with a method draw(). Then, create a subclass Circle that overrides the draw() method.
// Ensure that Circle instances can call both the Circle version of draw() and the Shape version using super.

class Shape{
    draw(){
        console.log("Drawing the shape......");
        
    }
}

class Circle extends Shape {
    draw(){
        console.log("drawing a circle");
        super.draw()
    }
}

let circle = new Circle()

circle.draw(0)