var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.querySelector('#colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetColors = document.querySelector('#resetColors');
var modeButtons = document.querySelectorAll('.mode');
/* colorDisplay.textContent = pickedColor;
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn"); */

/* if your code is longer than 10 lines you need to split it into
its own function */

init();

function init() {
  setupModeButtons();
  setupSquares();
  reseter();
}

function setupModeButtons() {
  /* Mode buttons events listeners */
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function() {
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === 'Easy' ? (numSquares = 3) : (numSquares = 6);
      reseter();
    });
  }
}

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    /* Add click listeners to squares */

    squares[i].addEventListener('click', function() {
      /* Grab color clicked square */
      var clickedColor = this.style.background;
      /* Compare color to pickedColor */
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = 'Correct';
        changeColors(clickedColor);
        h1.style.background = pickedColor;
        resetColors.textContent = 'Play Again?';
      } else {
        this.style.background = '#232323';
        messageDisplay.textContent = 'Try Again';
      }
    });
  }
}

function reseter() {
  /* Generate all new colors */
  colors = generateRandomColors(numSquares);
  /* Pick a new random color from array */
  pickedColor = pickColor();
  /* Change colorDisplay to match picked Color */
  colorDisplay.textContent = pickedColor;
  /* Change colros of squares */
  for (var i = 0; i < squares.length; i++) {
    /* Add initials colors to squares */
    if (colors[i]) {
      squares[i].style.background = colors[i];
      squares[i].style.display = 'block';
    } else {
      squares[i].style.display = 'none';
    }
  }
  h1.style.background = '#232323';
  resetColors.textContent = 'New Colors';
  messageDisplay.textContent = '';
}

/* 
easyBtn.addEventListener("click", function () {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "#232323";
    resetColors.textContent = "New Colors";
    messageDisplay.textContent = "";
});

hardBtn.addEventListener("click", function () {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
    h1.style.background = "#232323";
    resetColors.textContent = "New Colors";
    messageDisplay.textContent = "";
});

 */
resetColors.addEventListener('click', function() {
  reseter();
});

function changeColors(color) {
  /* Looop through all squares */
  for (var i = 0; i < squares.length; i++) {
    /* Change each color to match the given color */
    squares[i].style.background = color;
  }
}

function pickColor() {
  /* Match.random goes from 0 to 6 but doesn't include 6
    so we can multiply it by the array, will also by default
    start by 0 so if you wanted to start by another number just add
    + number */
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  /* Make an array */
  var arr = [];
  /* Add num random colors to array */
  for (i = 0; i < num; i++) {
    /* Get random color and push into array */
    arr[i] = randomColor(); /* arr.push(randomColor()); */
  }
  /* Return that array */
  return arr;
}

function randomColor() {
  var randomRgbColor =
    'rgb(' +
    Math.floor(Math.random() * 256) +
    ', ' +
    Math.floor(Math.random() * 256) +
    ', ' +
    Math.floor(Math.random() * 256) +
    ')';
  return randomRgbColor;
}
