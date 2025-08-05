class Person {
 // Constructor to initialize properties
 constructor(name, age) {
 this.name = name; // passing name parameter to name property
 this.age = age; // passing age parameter to age property
 }
 greet() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
 }
}

const person1 = new Person('Asamu', 40)

console.log(`${person1.name} is ${person1.age}`);

const testing = {
 first : 'asamu',
 second: 'asad20'
}
console.log(testing.first, testing.second);

let dates = new Date();
document.getElementById()