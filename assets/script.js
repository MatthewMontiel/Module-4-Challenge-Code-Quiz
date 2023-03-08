let starBtn = document.querySelector("#start-btn");
let timeEl = document.querySelector(".time");
let mainEl = document.getElementById("q-card");
let questions = document.getElementById("questions")
let secondsLeft = 60;
let choice1 = document.getElementById("c1");
let choice2 = document.getElementById("c2");
let choice3 = document.getElementById("c3");
let choice4 = document.getElementById("c4");


let quizQuestions = [
  {
    question: "JavaScript is an _____ language?", 
    choice1: "Object-Oriented",
    choice2: "Object-Based",
    choice3: "Procedural",
    choice4: "None of the above",
    answer: 1,
  },
  {
    question: "Which of the following keywords is used to define a variable in JavaScript", 
    choice1: "var",
    choice2: "let",
    choice3: "Both A and B",
    choice4: "None of the above",
    answer: 3,
  },
  {
    question: "Which of the following methods is used to access HTML elements using JavaScript?", 
    choice1: "getElementbyId()",
    choice2: "getElementsByClassName",
    choice3: "Both A and B",
    choice4: "None of the above",
    answer: 3,
  },
  {
    question: "Upon encountering empty statements, what does teh JavaScript interpreter do?", 
    choice1: "Throws an error",
    choice2: "Ignores the statements",
    choice3: "Gives a warning",
    choice4: "None of the above",
    answer: 2,
  },
  {
    question: "Which of the following methods can be used to display data in some form using JavaScript?", 
    choice1: "document.write()",
    choice2: "console.log()",
    choice3: "window.alert()",
    choice4: "All of the above",
    answer: 1,
  }
]


function setTime() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till Endgame";
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  timeEl.textContent = "0";
  let imgEl = document.createElement("img");
  imgEl.setAttribute("src", "./assets/images/thanos-avengers-endgame.gif");
  mainEl.appendChild(imgEl);
}

function startQuiz() {
  let current = 0;
  let Q = quizQuestions[current].questions;
  let C1 = quizQuestions[current].ans1;
  let C2 = quizQuestions[current].ans2;
  let C3 = quizQuestions[current].ans3;
  let C4 = quizQuestions[current].ans4;

  testArea.innerHTML = "<p>" + Q "</p>";
  choices1.innerHTML = C1;
  choices2.innerHTML = C2;
  choices3.innerHTML = C3;
  choices4.innerHTML = C4;
};


start-Btn.addEventlistener("Click", function() {
  setTime();
  startQuiz();
});

