/*
 * ******************************************************** *
 * Created Date: Tuesday, 2nd February 2021 2:06:26 pm      *
 * Author: Marcello Alfaro                                  *
 * Email: marcello.alfaro1@gmail.com                        *
 *                --------------------------                *
 * Last Modified: Wednesday, 3rd February 2021 2:09:46 pm   * 
 * Modified By: Marcello Alfaro                             * 
 *                --------------------------                *
 *                    Copyright (c) 2021                    *
 * ******************************************************** *
 */

/* Coding Challenge */

/* let JohnHeight = 1.95;
let JohnMass = 92;

let MarkHeight = 1.69;
let MarkMass = 78;

let BMIJohn = JohnMass / JohnHeight ** 2;
let BMIMark = MarkMass / MarkHeight ** 2;

let markHigherBMI = BMIMark > BMIJohn;

console.log(BMIJohn, BMIMark, markHigherBMI); */

const firstname = 'Jonas';
const year = 2037;
const birthyear = 1991;
const job = 'teacher';

const jonasNew = `I'm ${firstname}, a ${year - birthyear} year old ${job}!`;
console.log(jonasNew);

/* multi-line */

/* console.log(`String
multiple
lines`);

let JohnHeight = 1.95;
let JohnMass = 92;

let MarkHeight = 1.69;
let MarkMass = 78;

let BMIJohn = JohnMass / JohnHeight ** 2;
let BMIMark = MarkMass / MarkHeight ** 2;

if (BMIJohn > BMIMark) {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`);
} else {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})`);
}

console.log(String(23));

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;

if (money) {
  console.log('Dont sped it all');
} else {
  console.log('you should get a job');
}
 */

/* Coding challenge 3 */

const minimum_score = 100;

/* let Dolphins_score1 = 96;
let Dolphins_score2 = 108;
let Dolphins_score3 = 89;

let Koalas_score1 = 88;
let Koalas_score2 = 91;
let Koalas_score3 = 110; */

let Dolphins_score1 = 97;
let Dolphins_score2 = 112;
let Dolphins_score3 = 101;

let Koalas_score1 = 109;
let Koalas_score2 = 95;
let Koalas_score3 = 123;

let Dolphins_average = (Dolphins_score1 + Dolphins_score2 + Dolphins_score3) / 3;
let Koalas_average = (Koalas_score1 + Koalas_score2 + Koalas_score3) / 3;

if (Dolphins_average >= minimum_score && Koalas_average >= minimum_score) {
  if (Dolphins_average > Koalas_average) {
    console.log(
      `The Dolphins win with an average score of ${Dolphins_average} over ${Koalas_average} from Koalas, congrats!`
    );
  } else if (Koalas_average > Dolphins_average) {
    console.log(
      `The Kolas win with an average score of ${Koalas_average} over ${Dolphins_average} from Dolphins, congrats!`
    );
  } else {
    console.log(`It's a draw, stay down!`);
  }
} else if (Dolphins_average < minimum_score && Koalas_average >= minimum_score) {
  console.log(
    `The Kolas win with an average score of ${Koalas_average} over ${Dolphins_average} from Koalas, congrats!`
  );
} else if (Dolphins_average >= minimum_score && Koalas_average < minimum_score) {
  console.log(
    `The Dolphins win with an average score of ${Koalas_average} over ${Dolphins_average} from Koalas, congrats!`
  );
} else {
  console.log(`Either of both team reached the minimum score`);
}
