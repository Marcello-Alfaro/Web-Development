/*
 * ******************************************************** *
 * Created Date: Thursday, 30th July 2020 4:30:50 pm        *
 * Author: Marcello Alfaro                                  *
 * Email: marcello.alfaro1@gmail.com                        *
 *                --------------------------                *
 * Last Modified: Friday, 7th August 2020 2:54:47 pm        * 
 * Modified By: Marcello Alfaro                             * 
 *                --------------------------                *
 *                    Copyright (c) 2020                    *
 * ******************************************************** *
 */

/* --- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this. */

(function () {
  var questions = [],
    randomNumber,
    answer;

  var Question = function (question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  };

  Question.prototype.displayQuestion = function () {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function (ans, callback) {
    var sc;
    if (ans === this.correctAnswer) {
      console.log('Correct Answer!!');
      sc = callback(true);
    } else {
      console.log('Wrong Answer!!, Try Again');
      sc = callback(false);
    }
    this.displayScore(sc);
  };

  Question.prototype.displayScore = function (score) {
    console.log('Your current score is: ' + score);
    console.log('----------------------------------');
  };

  var question_1 = new Question(
    "What is the name of this courser's teacher",
    ['John', 'Jonas', 'Michael'],
    1
  );
  var question_2 = new Question(
    'Is JavaScript the coolest programming language in the world?',
    ['Yes', 'No'],
    0
  );
  var question_3 = new Question(
    'What does best describe coding',
    ['Boring', 'Hard', 'Fun', 'Tedious'],
    2
  );

  function score() {
    var sco = 0;
    return function (correct) {
      if (correct) {
        sco++;
      }
      return sco;
    };
  }

  var keepScore = score();

  questions = [question_1, question_2, question_3];

  function init() {
    randomNumber = Math.floor(Math.random() * questions.length);

    questions[randomNumber].displayQuestion();

    answer = prompt('Please select the correct answer!!');

    if (answer !== 'exit') {
      questions[randomNumber].checkAnswer(parseInt(answer), keepScore);
      init();
    }
  }

  init();
})();
