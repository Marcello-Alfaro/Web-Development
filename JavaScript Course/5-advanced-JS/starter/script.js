/* OBJECT ORIENTED PROGRAMMING */
/* Objects interacting with one another through methods and properties */
/* Used to store data, structure applications into modules and keeping code clean */

/* Class is in javascript is called a constructor or prototype*/

/* Inheritance */
/* When one object is based on another object, is when one object gets access
to another object properties and methods  */

/* javascript looks for a spefic method in the current object if not exist then continues to 
the next object in the prototype chain */

/*  SUMMARY */

/* * Every Javascript object has a prototype property, which makes inheritance possible
    in javascript  */

/* * The prototype of an object is where we put methods and properties that we want 
    other objects to access or inherit */

/* * The Constructor's prototype property is NOT the prototype of the Constructor itself,
    it's the prototype of ALL instances that are created through it */

/* * When a certain method (or property) is called, the search starts in the object
    itself, and if it cannot be found, the search moves on to the object's prototype
    This continues until the method is found: protoype chain, if not then goes to NULL and returns UNDEFINED */

//Function constructor

var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher',
};
// always write function constructors with first letter capital

/* var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function () {
  console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'smith'; */

/* Instatiation: this is an instance of the person object */
/* The NEW operator,first a brand new empty object is created, after that the constructor
    function which in this case is Person is called with the arguments that we specified*/

/* Thanks to the NEW operator, the THIS variable of the function points
    to the empty object that was created, rather than the global scope */
/* var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName); */

/* hasOwnProperty */
/* Ask if an object has a property or not */

/* console.log(john.hasOwnProperty('job'));
console.log(john.hasOwnProperty('lastName')); */

/* Instanceof */

/* console.log(john instanceof Person); */

/* Object.create */

/* The difference between object.create and function constructor pattern
    is that object.create build an object that inherits directly from the
    one that we pass into the first argument, the other inherits from the
    constructor prototype property  */

/* Object.create allows us to implement really complex inherits structures 
in an easier way, cuz allows to directly specify which object should be a prototype*/
/* var personProto = {
  calculateAge: function () {
    console.log(2020 - this.yearOfBirth);
  },
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
  name: { value: 'Jane' },
  yearOfBirth: { value: 1969 },
  job: { value: 'designer' },
}); */

/* Primitives vs objects */

/* Primitives */
var a = 23;
var b = a;
a = 45;
console.log(a); //45
console.log(b); //23
/* Each of the variables hold thier own copy of the data
  they do not reference anything */

/* Objects */
var obj1 = {
  name: 'john',
  age: 25,
};

var obj2 = obj1;
/* This did not create a new object no copy was created, 
  this created a new reference which points to the first object
  
  obj1 and obj2 both hold a reference that points to the same
  object in the memory, which is obj1*/

obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

/* Functions */
var age = 27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon',
};

function change(a, b) {
  a = 30;
  b.city = 'San Francisco';
}
/* When we pass a primitive into a function a simple copy
  is created, so we can change A as much as we want
  it will never affect the variable on the outside cuz
  it is a primitve 
  
  When we pass object is not really the object that we pass
  but the reference to the object
  */
change(age, obj);

console.log(age);
console.log(obj.city);
