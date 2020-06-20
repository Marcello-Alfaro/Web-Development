/*
 * ******************************************************** *
 * Created Date: Friday, 12th June 2020 6:06:00 pm          *
 * Author: Marcello Alfaro                                  *
 * Email: marcello.alfaro1@gmail.com                        *
 *                --------------------------                *
 * Last Modified: Friday, 19th June 2020 4:23:31 pm         * 
 * Modified By: Marcello Alfaro                             * 
 *                --------------------------                *
 *                    Copyright (c) 2020                    *
 * ******************************************************** *
 */

/* var johnMass, johnHeight, markMass, markHeight, johnBMI, markBMI, isHigherBMI;

johnMass = 60;
johnHeight = 1.83;

markMass = 90;
markHeight = 1.72;

johnHeight *= johnHeight;
markHeight *= markHeight;
johnBMI = johnMass / johnHeight;
markBMI = markMass / markHeight;

isHigherBMI = markBMI > johnBMI;
console.log("Is Mark's BMI higher than John's? " + isHigherBMI); */

/* var firstName = 'John';
var age = 16;

age >= 18
  ? console.log(firstName + ' drinks beer.')
  : console.log(firstName + 'drinks JUICE');

var drink = age >= 18 ? 'beer' : 'juice';

console.log(firstName + ' ' + drink); */

/* var johnMatch1 = 120;
var johnMatch2 = 120;
var johnMatch3 = 120;

var markMatch1 = 140;
var markMatch2 = 120;
var markMatch3 = 120;

var maryMatch1 = 180;
var maryMatch2 = 120;
var maryMatch3 = 120;

var johnTeam = (johnMatch1 + johnMatch2 + johnMatch3) / 3;
var markTeam = (markMatch1 + markMatch2 + markMatch3) / 3;
var maryTeam = (maryMatch1 + maryMatch2 + maryMatch3) / 3;

console.log(johnTeam, markTeam, maryTeam);

if (johnTeam > markTeam && johnTeam > maryTeam) {
  console.log("John's Team is the winnner");
} else if (markTeam > johnTeam && markTeam > maryTeam) {
  console.log("Mark's Team is the winner");
} else if (maryTeam > johnTeam && maryTeam > markTeam) {
  console.log("Mary's Team is the winner");
} else {
  console.log("It's a draw, stay down!");
} */

/* Function Declaration */
/* function whatDoYouDo(job, firstName){ } */

/* Function Expression */
/* Expression are pieces of codes that always produce a value example 2 + 3 = 5*/
/* Whenever javascript expect a value always have to write an expression */

/* Staments */
/* They perform actions, they do things but they dont produce results or value
    example: if statements, for loops*/

/* return keyword not only returns the value also finish the function no need for break  */
/* var whatDoYouDo = function (job, firstName) {
  switch (job) {
    case 'teacher':
      
      return firstName + ' teaches kids how to code';
    case 'driver':
      return firstName + ' drives a cab in Lisbon';
    case 'designer':
      return firstName + ' designs beutiful websites';
    default:
      return firstName + ' does something else';
  }
};

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('cop', 'Mark')); */

/* arrays */

/* var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names.length);

names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names); */

//Diferent data types
/* indexOf returns the index of the element on the array if it exists */
/* Adds an element at the beginning of the array */
/* pop() Removes the element from the end */
/* shift() Removes the first element of the array */
/* John.pop();
var John = ['John', 'Smith', 1990, 'designer', false];

John.push('blue');

John.unshift('Mr.');
console.log(John);

John.pop();

John.shift();
console.log(John);

var isDesigner =
  John.indexOf('designer') > 0
    ? 'John is a designer'
    : 'John is NOT a designer';

console.log(isDesigner);
console.log(John.indexOf('designer')); */

/* Code challenge 3 */

/* var tips = [];
var finalBills = [];
var bills = [124, 48, 268];

var tipCalculator = function (bill) {
  var tip;
  if (bill < 50) {
    tip = bill * 0.2;
  } else if (bill >= 50 && bill <= 200) {
    tip = bill * 0.15;
  } else if (bill > 200) {
    tip = bill * 0.1;
  }
  return tip;
};

tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2]),
];

finalBills = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]; */

/* finalBills.push(bill1 + tips[tips.push(tipCalculator(bill1)) - 1]);
finalBills.push(bill2 + tips[tips.push(tipCalculator(bill2)) - 1]);
finalBills.push(bill3 + tips[tips.push(tipCalculator(bill3)) - 1]); */

/* console.log(tips);
console.log(finalBills); */

/* Objects and propierties */

/* new object syntax  */
/* var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane); */

/* Object Literal */
/* key - value parse */
/* var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john); */

/* var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1992,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function () {
    return 2020 - this.birthYear;
    this.age = 2020 - this.birthYear;
  },
}; */

/* john.age = john.calcAge(); */
/* john.calcAge();
console.log(john.age); */

/* Coding Challenge 4 */

/* john = {
  fullName: 'John Salchichon',
  height: 1.95,
  mass: 110,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

mark = {
  fullName: 'Mark Zuckerberga',
  height: 1.69,
  mass: 78,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

john.calcBMI();
mark.calcBMI();

if (john.BMI > mark.BMI) {
  console.log(john.fullName + ' has higher BMI: ' + john.BMI);
} else if (mark.BMI > john.BMI) {
  console.log(mark.fullName + ' has higher BMI: ' + mark.BMI);
} else {
  console.log('They both have same BMI');
} */

/* Continue and break statements */
/* var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = john.length - 1; i >= 0; i--) {
  if (typeof john[i] !== 'string') continue;
  console.log(john[i]);
} */

/* for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') break;
  console.log(john[i]);
} */

/* var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}
 */

/* Code challenge 5 */

var johnBill = {
  fullName: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  calcTips: function () {
    this.tips = [];
    this.finalBill = [];
    var percentage;
    for (var i = 0; i < this.bills.length; i++) {
      var bill = this.bills[i];
      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill <= 200) {
        percentage = 0.15;
      } else if (bill > 200) {
        percentage = 0.1;
      }
      this.tips[i] = this.bills[i] * percentage;
      this.finalBill[i] = this.bills[i] + this.tips[i];
    }
  },
};

var markBill = {
  fullName: 'Mark Grimes',
  bills: [77, 475, 110, 45],
  calcTips: function () {
    this.tips = [];
    this.finalBill = [];
    var percentage;
    for (var i = 0; i < this.bills.length; i++) {
      var bill = this.bills[i];
      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill < 300) {
        percentage = 0.1;
      } else if (bill >= 300) {
        percentage = 0.25;
      }
      this.tips[i] = this.bills[i] * percentage;
      this.finalBill[i] = this.bills[i] + this.tips[i];
    }
  },
};

var averageTips = function (tips) {
  var averTips = 0;
  for (i = 0; i < tips.length; i++) {
    averTips += tips[i];
  }
  return averTips / tips.length;
};

johnBill.calcTips();
markBill.calcTips();

johnBill.averageTip = averageTips(johnBill.tips);
markBill.averageTip = averageTips(markBill.tips);
console.log(johnBill.averageTip, markBill.averageTip);

console.log('---------------------------------');
console.log(johnBill.tips);
console.log(johnBill.finalBill);
console.log('---------------------------------');

console.log('---------------------------------');
console.log(markBill.tips);
console.log(markBill.finalBill);
console.log('---------------------------------');

if (johnBill.averageTip > markBill.averageTip) {
  console.log(
    johnBill.fullName +
      ' family paid the highest tips, with an average of ' +
      johnBill.averageTip
  );
} else if (markBill.averageTip > johnBill.averageTip) {
  console.log(
    markBill.fullName +
      ' family paid the highest tips, with an average of ' +
      markBill.averageTip
  );
} else {
  console.log('They both paid the same amount on average');
}
