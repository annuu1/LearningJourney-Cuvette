class Pet {

  constructor(name, species) {
    this.name= name;
    this.species = species;
    this.hunger = 5;
  }
  eat(){
    this.hunger--
    console.log(`${this.name} is eating...`);
  }
  play(){
    this.hunger--
    console.log(`${this.name} is playing...`);
  }
  get getStatus(){
    console.log(`Getting the status of the pet ${this.name}.......`);
    
    console.log(`Pet name : ${this.name}
Species ${this.species}
Hunger level ${this.hunger}`);   
  }
}
class Cat extends Pet {
  constructor(name, species) {
    super(name, species)
  }
  play(){
    console.log(this.name,  "is playing with yarn ball");
    
  }
}


let cat1 = new Cat("Bindu", "Brown Cat")

cat1.eat()
cat1.play()
cat1.getStatus