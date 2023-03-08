var timeEl = document.querySelector(".time");

var mainEl = document.getElementById("q-card");

var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till endgame.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "./assets/images/thanos-avengers-endgame.gif");
  mainEl.appendChild(imgEl);
}

function startGame() {}
