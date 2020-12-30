// Let and const

// ES5

var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';

console.log(name5);

// ES6
/* Instead of var we can choose between let and const 
const is for values that we dont wanna change
let  is like the old var, is for values that we wanna 
change or mutate later on*/

/* Variables declared with var in ES5 are function scoped
but variables declared with let and const in ES6 are blocked scoped*/

/* A block scoped is simply all the code that is wrapped between the 
curly braces so each time we have an if statement, a for block or a 
while block we're creating a new block and the variables declared with let
and const are only accessible by the code that is inside of that same block,
so we move out of the block, then we dont longer have access to the variables*/

/* In function scoped we have access to the variables if they're on the same function */

/* So to able to use the blocked scoped variables, we have to define them outside
like on a global block */

/* We cannot define a constant in a block and then use it outside of that block*/

/* With var declares we'll get undefined when called them before they get any value
with let declares we get an error of not defined

This happens cuz of something called the temporal deadzone
which basically just means that the variables are actually hosted
but we cannot still access them before they are declared*/
/* So this means that we can only use a variable after we actually 
declared it and defined it */
const name6 = 'Jane Smith';
let age6 = 23;

console.log(name6);

// ES5
function driversLicence5(passedTest) {
  if (passedTest) {
    var firstname = 'John';
    var yearOfBirth = 1990;
    console.log(firstname + ' ' + yearOfBirth);
  }
}

driversLicence5(true);

// ES6
function driversLicence6(passedTest) {
  let firstname;
  const yearOfBirth = 1990;
  if (passedTest) {
    firstname = 'John';
  }
  console.log(firstname + ' ' + yearOfBirth);
}

driversLicence6(true);

let i = 23;
for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);

// Blocks and IIFES

// ES6
{
  const a = 1;
  let b = 2;
  var c = 3;
}

console.log(c);

// ES5
(function () {
  var c = 3;
})();

// console.log(c);

// Strings

let firstname = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
  return 2020 - year;
}

// ES5

console.log(
  'This is ' +
    firstname +
    ' ' +
    lastName +
    '. He was born in ' +
    yearOfBirth +
    '. Today, he is ' +
    calcAge(yearOfBirth) +
    ' years old.'
);

// ES6
// template literals
console.log(
  `This is ${firstname} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(
    yearOfBirth
  )} years old.`
);

const n = `${firstname} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.includes('oh'));
console.log(n.endsWith('th'));
console.log(`${firstname} `.repeat(5));

// Array functions

const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function (curr) {
  return 2020 - curr;
});
console.log(ages5);

// ES6
// all we need is the argument, the arrow and what we have in
// the return statement
let ages6 = years.map((curr) => 2020 - curr);
console.log(ages6);

ages6 = years.map((curr, index) => `Age element ${index + 1}: ${2020 - curr}`);
console.log(ages6);

ages6 = years.map((curr, index) => {
  const now = new Date().getFullYear();
  const age = now - curr;
  return `Age element ${index + 1}: ${age}`;
});

console.log(ages6);

// Arrow functions 2
// The biggest advantages of using arrow functions is that they
// share the sorrounding this keyword
// arrow functions dont get thier own this keyword unlike normal functions
// Arrow functions don't have a this keyword, they simply use the this keyword
// of the function they are written in, so we say they have a LEXICAL THIS VARIABLE

// ES5
// The callback function we have in the event handler is not method is a regular
// funtion call so the this keyword in that function points to the windows object
// instead of the box5 object

// Always use arrow functions when you need to preserve the value of the this keyword
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function () {
    var self = this;
    document.querySelector('.green').addEventListener('click', function () {
      var str = 'This is box number ' + self.position + ' and it is ' + self.color;
      alert(str);
    });
  },
};
// box5.clickMe();

//ES6
const box6 = {
  color: 'green',
  position: 1,
  clickMe: function () {
    document.querySelector('.green').addEventListener('click', () => {
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  },
};
box6.clickMe();

const box66 = {
  color: 'green',
  position: 1,
  clickMe: () => {
    document.querySelector('.green').addEventListener('click', () => {
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  },
};
box6.clickMe();

function Person(name) {
  this.name = name;
}
// call, bind and apply allows to define the this variables manually, and binds create a copy of a function
// call calls the function inmediatily
// ES5
Person.prototype.myFriends5 = function (friends) {
  var arr = friends.map(
    function (el) {
      return this.name + ' is friends with ' + el;
    }.bind(this)
  );
  console.log(arr);
};

var friends = ['Bob', 'Jane', 'Mark'];

new Person('John').myFriends5(friends);

//ES6
Person.prototype.myFriends6 = function (friends) {
  var arr = friends.map((el) => {
    return `${this.name} is friends with ${el}`;
  });
  console.log(arr);
};

var friends = ['Bob', 'Jane', 'Mark'];

new Person('John').myFriends6(friends);
new Person('Mike').myFriends6(friends);

// Destructuring
/* Gives a very convinient way to extract data from a data structure
like an object or an array */

// ES5
var John = ['John', 26];
// var name = John[0];
// var age = John[1];

//ES6
const [name, year] = ['john', 26];
console.log(name, year);

const obj = {
  firstname: 'john',
  lastName: 'smith',
};

const { firstname: a, lastName: b } = obj;

console.log(a, b);

function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age, retirement] = calcAgeRetirement(1990);

console.log(age, retirement);

// Arrays in ES6
const boxes = document.querySelectorAll('.box');

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach(function (curr) {
  curr.style.backgroundColor = 'dodgerblue';
});

// ES6
// From() will transform a nodelist into an array
const boxesArr6 = Array.from(boxes);

boxesArr6.forEach((curr) => {
  curr.style.backgroundColor = 'dodgerblue';
});

// loop
