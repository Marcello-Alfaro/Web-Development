var play1 = document.querySelector("#player1");
var play2 = document.querySelector("#player2");
var p1Display = document.querySelector("#score1");
var p2Display = document.querySelector("#score2");
var numberRounds = document.querySelector("input");
var rounds = document.querySelector("#rounds");
var reset = document.querySelector("#reset");
var scoreCounter1 = 0;
var scoreCounter2 = 0;
var winningScore = 5;
var gameOver = false;

/* The "change" Event will run anytime the value changes,
    it doesn't matter how that value changed "click" or keyboard */
numberRounds.addEventListener("change", function () {
    rounds.textContent = this.value;
    winningScore = this.value;
    resetButton();
});

play1.addEventListener("click", function () {
    if (!gameOver) {
        scoreCounter1++;
        if (scoreCounter1 == winningScore) {
            p1Display.classList.add("winner");
            gameOver = !gameOver;
        }
        p1Display.textContent = scoreCounter1;
    }
});

play2.addEventListener("click", function () {
    if (!gameOver) {
        scoreCounter2++;
        if (scoreCounter2 == winningScore) {
            p2Display.classList.add("winner");
            gameOver = !gameOver;
        }
        p2Display.textContent = scoreCounter2;
    }
});

reset.addEventListener("click", function () {
    resetButton();
});

function resetButton() {
    scoreCounter1 = 0;
    scoreCounter2 = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}