let startBtn = document.querySelector("#start");
let timeEl = document.querySelector("#time");
let mainEl = document.getElementById("q-card");
let initEL = document.getElementById("init");
let qArea = document.getElementById("q-area");
let aArea = document.getElementById("a-area");
let secondsLeft = 60;
let choices1 = document.getElementById("c1");
let choices2 = document.getElementById("c2");
let choices3 = document.getElementById("c3");
let choices4 = document.getElementById("c4");
let form = document.getElementById("form");
let choice = document.querySelectorAll(".choices");
let feedback = document.getElementById("feedback");
let feedbackExpiration;
let message = document.getElementById("message");
let initials = document.getElementById("initials");
let inputField = document.getElementById("input");
let submitBtn = document.getElementById("submit");
let scoresArea = document.getElementById("scores-area");

let quizQuestions = [
  {
    question: "JavaScript is an _____ language?",
    answer1: "Object-Oriented",
    answer2: "Object-Based",
    answer3: "Procedural",
    answer4: "None of the above",
    answer: "Object-Oriented",
  },
  {
    question:
      "Which of the following keywords is used to define a variable in JavaScript",
    answer1: "var",
    answer2: "let",
    answer3: "Both A and B",
    answer4: "None of the above",
    answer: "Both A and B",
  },
  {
    question:
      "Which of the following methods is used to access HTML elements using JavaScript?",
    answer1: "getElementbyId()",
    answer2: "getElementsByClassName",
    answer3: "Both A and B",
    answer4: "None of the above",
    answer: "Both A and B",
  },
  {
    question:
      "Upon encountering empty statements, what does teh JavaScript interpreter do?",
    answer1: "Throws an error",
    answer2: "Ignores the statements",
    answer3: "Gives a warning",
    answer4: "None of the above",
    answer: "Ignores the statements",
  },
  {
    question:
      "Which of the following methods can be used to display data in some form using JavaScript?",
    answer1: "document.write()",
    answer2: "console.log()",
    answer3: "window.alert()",
    answer4: "All of the above",
    answer: "document.write()",
  },
];

let current = 0;
let Q = quizQuestions[current].question;
let C1 = quizQuestions[current].answer1;
let C2 = quizQuestions[current].answer2;
let C3 = quizQuestions[current].answer3;
let C4 = quizQuestions[current].answer4;

showInIt();

function showInIt() {
  initEL.classList.toggle("hide");
}

let timerInterval;

function setTime() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till Endgame";
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
      endQuiz();
    }
  }, 1000);
}

startBtn.addEventListener("click", function () {
  setTime();
  showQuiz();
});

function sendMessage() {
  timeEl.textContent = "0";
  let imgEl = document.createElement("img");
  imgEl.setAttribute("src", "./assets/images/thanos-avengers-endgame.gif");
  mainEl.appendChild(imgEl);
}

function showQuiz() {
  timeEl.classList.toggle("hide");
  timeEl.textContent = secondsLeft;
  initEL.classList.toggle("hide");
  qArea.innerHTML = Q;
  choices1.innerHTML = C1;
  choices2.innerHTML = C2;
  choices3.innerHTML = C3;
  choices4.innerHTML = C4;
}
aArea.addEventListener("click", check);
function check(event) {
  let right = quizQuestions[current].answer;
  if (event.target.textContent == right) {
    next();
    feedback.innerHTML = "One more Stone to add to the collection";
    feedbackExpiration = setTimeout(function () {
      feedback.innerHTML = "";
    }, 1000);
  } else {
    punish(15);
    next();
    feedback.innerHTML = "Your're ruining the balance";
    feedbackExpiration = setTimeout(function () {
      feedback.innerHTML = "";
    }, 1000);
    stopAtZero();
    timeEl.textContent = secondsLeft;
  }
}

function stopAtZero() {
  if (secondsLeft <= 0) {
    secondsLeft = 0;
    endQuiz();
  }
}

function punish(seconds) {
  secondsLeft -= seconds;
}

function hideFeedback() {
  clearTimeout(feedbackExpiration);
}

function next() {
  current++;
  hideFeedback();

  if (current < 5) {
    let Q = quizQuestions[current].question;
    let C1 = quizQuestions[current].answer1;
    let C2 = quizQuestions[current].answer2;
    let C3 = quizQuestions[current].answer3;
    let C4 = quizQuestions[current].answer4;

    qArea.innerHTML = Q;
    choices1.innerHTML = C1;
    choices2.innerHTML = C2;
    choices3.innerHTML = C3;
    choices4.innerHTML = C4;
  } else {
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(timerInterval);
  qArea.classList.toggle("hide");
  aArea.classList.toggle("hide");
  form.classList.toggle("hide");
  timeEl.classList.toggle("hide");
}
