/* OBJECT ORIENTED PROGRAMMING */
/* Objects interacting with one another through methods and properties */
/* Used to store data, structure applications into modules and keeping code clean */

/* Class in javascript is called a constructor or prototype*/

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

/*
var john = new Person('John', 1990, 'teacher');
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
    is that object.create builds an object that inherits directly from the
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

/* First class functions: 
  Funtions are also objects in javascript */

/* * A function is an instance of the Object type */
/* * A function behaves like any other object*/
/* * We can store functions in a variable */
/* * We can pass a function as an argument to another function */
/* * We can return a function from a function */

/* var years = [1990, 1965, 1975, 2005, 2008];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(el) {
  return el >= 18;
} */

/* Round - rounds the number to the closest integer */
/* function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);

var fullAges = arrayCalc(ages, isFullAge);

var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates); */

/* Funtions returning Functions */

/* function interviewQuestion(job) {
  if (job === 'designer') {
    return function (name) {
      console.log(name + ', can you please explain what UX design is?');
    };
  } else if (job === 'teacher') {
    return function (name) {
      console.log('what subject do you teach, ' + name + '?');
      return function (subject) {
        console.log(
          'Ohh Mr ' +
            name +
            ' so you teach ' +
            subject +
            "that's very interesting"
        );
      };
    };
  } else {
    return function (name) {
      console.log('Hello ' + name + 'what do you do?');
    };
  }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestin = interviewQuestion('designer');

console.log(teacherQuestion('john'));
console.log(designerQuestin('jane')); */

/* Lecture: IIFE - Immediately Invoked Function */

/* function game() {
  var score = Math.floor(Math.random() * 10);
  console.log(score >= 5);
}

game(); */

/* This is an IIFE */
/* Writting a function like this without a name and with out 
  the parenthesis, the javascript parser will think that this
  is a Function declaration, but we dont have a name for this
  so it will throw an error. For this we need to trick the 
  Parser and make it believe that what we have here is an
  EXPRESSION and not a DECLARATION and the solution is wrap 
  the entire thing into parenthesis cuz in javascript what
  is inside in parenthesis cannot be a statement and like this
  javascript will know that it should trick this as an 
  Expression and not as a Declaration  */
(function () {
  var score = Math.floor(Math.random() * 10);
  console.log(score >= 5);
})();

/* console.log(score); */

/* In this case we're not using a function
  to create a piece o reusable code, all we want
  is to create a new scope that is hidden from the
  outside scope, where we can savely put variables */

(function (goodluck) {
  var score = Math.floor(Math.random() * 10);
  console.log(score >= 5 - goodluck);
})(5);

/*  Closures */

/* An inner function has always access to the variables
  and paremeters of its outer function, even after the
  outer function has returned */

/* function retirement(retirementAge) {
  var a = ' years left until retirement.';
  return function (yearOfBirth) {
    var age = 2016 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

function interviewQuestion(job) {
  return function (name) {
    if (job === 'designer') {
      console.log(name + ', can you please explain what UX design is?');
    } else if (job === 'teacher') {
      console.log('what subject do you teach, ' + name + '?');
    } else {
      console.log('hello' + name + 'what do you do?');
    }
  };
}

var johhWork = interviewQuestion('designer');
johhWork('john');

interviewQuestion('teacher')('Mark'); */

/* Lecture: Bind, call and apply methods */

var john = {
  name: 'John',
  age: 25,
  job: 'teacher',
  presentation: function (style, timeOfDay) {
    if (style === 'formal') {
      console.log(
        'Good ' +
          timeOfDay +
          ", ladies and gentlemen! I'm " +
          this.name +
          " I'm a " +
          this.job +
          " I'm " +
          this.age +
          ' years old.'
      );
    } else if (style === 'friendly') {
      console.log(
        "Hey! what's up I'm " +
          this.name +
          " I'm a " +
          this.job +
          " I'm " +
          this.age +
          ' years old. Have a nice ' +
          timeOfDay +
          '.'
      );
    }
  },
};

/* Call() method
  Is used to use, call or borrow a method from another object  */
/* The fisrt argument is for the THIS variable where it should
  be the object we want to use the method */

/* There is a similar one called Apply() the differences is that
  apply() recives an array as argument */
var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer',
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');
//john.presentation.apply(emily, ['friendly', 'afternoon']);

/* Bind() method
  Works similar to Call() the difference is that bind()
  does not inmetiatly call the function,but instead
  it generates a copy of the function, so we can store it
  somewhere.

  Bind() also allows Carring, Carring is a technique in which
  we create a function based on another function, but with
  some preset parameters
*/

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('afternoon');

var years = [1990, 1965, 1975, 2005, 2008];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
