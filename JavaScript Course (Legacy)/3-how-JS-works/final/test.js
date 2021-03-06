/*
 * ******************************************************** *
 * Created Date: Saturday, 20th June 2020 9:05:13 pm        *
 * Author: Marcello Alfaro                                  *
 * Email: marcello.alfaro1@gmail.com                        *
 *                --------------------------                *
 * Last Modified: Monday, 22nd June 2020 8:43:56 pm         * 
 * Modified By: Marcello Alfaro                             * 
 *                --------------------------                *
 *                    Copyright (c) 2020                    *
 * ******************************************************** *
 */

/* Hoisting */
//functions
/* Hoisting with functions only works for functions declarations  */
/* calculateAge(1990);

function calculateAge(year) {
  console.log(2016 - year);
}

// retirement(1990);

var retirement = function (year) {
  console.log(65 - (2016 - year));
}; */

/* Variable */
/* console.log(age);
var age = 23;

function foo() {
  console.log(age);
  var age = 65;
  console.log(age);
}

foo();
console.log(age); */

/* The this keyword in the global execution context is
simple the window object */

/* console.log(this); */

/* function calculateAge(year) {
  console.log(2016 - year);
  console.log(this);
} */

var john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function () {
    console.log(this);
    console.log(2016 - this.yearOfBirth);

    function innerFuncion() {
      console.log(this);
    }

    innerFuncion();
  },
};

john.calculateAge();

var mike = {
  name: 'Mike',
  yearOfBirth: 1984,
};

mike.calculateAge = john.calculateAge;

mike.calculateAge();

/* The this keyword becomes something 
a soon as the method gets call */
