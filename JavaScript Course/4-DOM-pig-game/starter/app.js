/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/* A state variable simply tell us the condition of a system, we need a state
variable when we need to remenber something */

var scores, roundScore, activePlayer, gamePlaying, previousDice, winningScore;

init();

/* A callback function is a function that is being called by another function */

document.querySelector('.btn-roll').addEventListener('click', function () {
  if (gamePlaying) {
    //1. Random Number
    var dice = Math.floor(Math.random() * 6 + 1);
    var dice2 = Math.floor(Math.random() * 6 + 1);
    //2. Display the result
    var diceDOM = document.querySelector('.dice-0');
    var diceDOM2 = document.querySelector('.dice-1');

    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    diceDOM2.style.display = 'block';
    diceDOM2.src = 'dice-' + dice2 + '.png';

    //3. Update the round score IF the rolled number was NOT a 1
    if (dice !== 1 && dice2 !== 1) {
      if (previousDice === 6 && dice === 6) {
        scores[activePlayer] = 0;
        nextPlayer();
      } else {
        //Add Score
        roundScore += dice + dice2;
        document.querySelector(
          '#current-' + activePlayer
        ).textContent = roundScore;
        previousDice = dice;
      }
    } else {
      //Next player
      previousDice = 0;
      gameOver();
    }
  }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
  if (gamePlaying) {
    //add current score to global score
    scores[activePlayer] += roundScore;

    //update the UI
    previousDice = 0;
    //check if the player won the game
    gameOver();
  }
});

document.querySelector('.btn-new').addEventListener('click', init);

document
  .querySelector('.winning-score-set')
  .addEventListener('keypress', function (evt) {
    if (evt.key === 'Enter') {
      document.querySelector(
        '.winning-score span'
      ).textContent = winningScore = Number(
        document.querySelector('.winning-score-set').value
      );
      document.querySelector('.winning-score-set').value = '';
    }
  });

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  previousDice = 0;
  winningScore = 100;
  gamePlaying = true;

  document.querySelector('.winning-score').innerHTML =
    'Winning score set to: <span> ' +
    winningScore +
    ' <span>(default)</span>  </span>';

  document.querySelector('.dice-0').style.display = 'none';
  document.querySelector('.dice-1').style.display = 'none';

  document.querySelector('#score-0').textContent = '0';
  document.querySelector('#score-1').textContent = '0';
  document.querySelector('#current-0').textContent = '0';
  document.querySelector('#current-1').textContent = '0';

  document.querySelector('#name-0').textContent = 'Player 1';
  document.querySelector('#name-1').textContent = 'Player 2';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');

  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  document
    .querySelector('.player-' + activePlayer + '-panel')
    .classList.add('active');
}

function nextPlayer() {
  document.querySelector('#score-' + activePlayer).textContent =
    scores[activePlayer];
  document
    .querySelector('.player-' + activePlayer + '-panel')
    .classList.remove('active');
  roundScore = 0;
  document.querySelector('#current-' + activePlayer).textContent = roundScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelector('.player-' + activePlayer + '-panel')
    .classList.add('active');
}

function gameOver() {
  if (scores[activePlayer] >= winningScore) {
    document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
    document.querySelector('#score-' + activePlayer).textContent =
      scores[activePlayer];
    document.querySelector('.dice-0').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';
    document
      .querySelector('.player-' + activePlayer + '-panel')
      .classList.remove('active');
    document
      .querySelector('.player-' + activePlayer + '-panel')
      .classList.add('winner');
    gamePlaying = false;
  } else {
    //next player
    nextPlayer();
  }
}
