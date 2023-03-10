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
    choices1: "Object-Oriented",
    choices2: "Object-Based",
    choices3: "Procedural",
    choices4: "None of the above",
    answer: 1,
  },
  {
    question:
      "Which of the following keywords is used to define a variable in JavaScript",
    choices1: "var",
    choices2: "let",
    choices3: "Both A and B",
    choices4: "None of the above",
    answer: 3,
  },
  {
    question:
      "Which of the following methods is used to access HTML elements using JavaScript?",
    choices1: "getElementbyId()",
    choices2: "getElementsByClassName",
    choices3: "Both A and B",
    choices4: "None of the above",
    answer: 3,
  },
  {
    question:
      "Upon encountering empty statements, what does teh JavaScript interpreter do?",
    choices1: "Throws an error",
    choices2: "Ignores the statements",
    choices3: "Gives a warning",
    choices4: "None of the above",
    answer: 2,
  },
  {
    question:
      "Which of the following methods can be used to display data in some form using JavaScript?",
    choice1: "document.write()",
    choice2: "console.log()",
    choice3: "window.alert()",
    choice4: "All of the above",
    answer: 1,
  },
];

let current = 0;
let Q = quizQuestions[current].question;
let c1 = quizQuestions[current].ans1;
let c2 = quizQuestions[current].ans2;
let c3 = quizQuestions[current].ans3;
let c4 = quizQuestions[current].ans4;

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
  choices1.innerHTML = c1;
  choices2.innerHTML = c2;
  choices3.innerHTML = c3;
  choices4.innerHTML = c4;
}

function check(event) {
  let right = quizQuestions.answer;
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
    let Q = questions[current].question;
    let c1 = questions[current].ans1;
    let c2 = questions[current].ans2;
    let c3 = questions[current].ans3;
    let c4 = questions[current].ans4;

    qArea.innerHTML = Q;
    choices1.innerHTML = c1;
    choices2.innerHTML = c2;
    choices3.innerHTML = c3;
    choices4.innerHTML = c4;
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
