const quizQuestions = [
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "This mobile OS held the largest market share in 2012.",
    correct_answer: "iOS",
    incorrect_answers: ["Android", "BlackBerry", "Symbian"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "When Gmail first launched, how much storage did it provide for your email?",
    correct_answer: "1GB",
    incorrect_answers: ["512MB", "5GB", "Unlimited"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What amount of bits commonly equals one byte?",
    correct_answer: "8",
    incorrect_answers: ["1", "2", "64"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What does the Prt Sc button do?",
    correct_answer: "Captures what's on the screen and copies it to your clipboard",
    incorrect_answers: ["Nothing", "Saves a .png file of what's on the screen in your screenshots folder in photos", "Closes all windows"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "In computing, what does LAN stand for?",
    correct_answer: "Local Area Network",
    incorrect_answers: ["Long Antenna Node", "Light Access Node", "Land Address Navigation"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "The Electron computer was released in Britain during 1983 for the home computing market, by which company? ",
    correct_answer: "Acorn Computers",
    incorrect_answers: ["Sinclair Research", "Amstrad PLC", "Commodore Business Machines"],
  },
];

let correct = 0;
let wrong = 0;
let questionNumber = 0;
let time = 0;
let seconds = document.getElementById("seconds");
let second;

function generateQs() {
  time = 8;
  seconds.textContent = time;

  if (second != 0) {
    clearInterval(second);
  }

  const question = quizQuestions[questionNumber];
  document.getElementById("quiz-question-title").innerText = question.question;
  const allAnswers = [...question.incorrect_answers, question.correct_answer];
  allAnswers.sort(() => Math.random() - 0.5);

  document.getElementById("currentQuestion").innerText = questionNumber + 1;
  document.getElementById("currentQuestion").style.color = "#fff";
  document.getElementById("allQuestions").innerText = "/ " + quizQuestions.length;
  document.getElementById("quiz-possible-answers").innerHTML = "";

  second = setInterval(function () {
    time--;
    seconds.textContent = time;

    if (time === 0) {
      clearInterval(second);
      questionNumber++;
      wrong++;

      if (questionNumber < quizQuestions.length) {
        generateQs();
      } else {
        showResults();
      }
    }
  }, 1000);

  for (let i = 0; i < allAnswers.length; i++) {
    const button = document.createElement("button");
    button.innerText = allAnswers[i];
    button.classList.add("answer-button");
    button.onclick = function (e) {
      if (allAnswers[i] === question.correct_answer) {
        correct++;
      } else {
        wrong++;
      }

      questionNumber++;

      if (questionNumber < quizQuestions.length) {
        generateQs();
      } else {
        showResults();
      }
    };

    document.getElementById("quiz-possible-answers").appendChild(button);
  }
  startTimer();
}

function showResults() {
  let divresults = document.getElementById("results");
  let divquiz = document.getElementById("quiz-question-div");
  let divtimer = document.getElementById("timer");

  divquiz.style.display = "none";
  divtimer.style.display = "none";
  divresults.style.display = "block";

  document.getElementById("percorrect").innerText = correct * 10 + "%";
  document.getElementById("perwrong").innerText = wrong * 10 + "%";
  document.getElementById("numCorrectanswers").innerText = correct + " /10 questions";
  document.getElementById("numWronganswers").innerText = wrong + " /10 questions";
  let strokeDasharray = 0;
  let grafic_segment = document.querySelector(".donut-segment");

  if (wrong > 5) {
    document.querySelector(".chart-title").textContent = "Sorry!";
    document.querySelector(".chart-subtitle").textContent = "You didn't pass the exam!";

    strokeDasharray = `${wrong * 10} ${correct * 10}`;
    grafic_segment.setAttribute("stroke-dasharray", strokeDasharray);
    grafic_segment.setAttribute("stroke-dashoffset", -75);

    document.querySelector(".chart-certificate").remove();
  } else {
    strokeDasharray = `${correct * 10} ${wrong * 10}`;
    grafic_segment.setAttribute("stroke-dasharray", strokeDasharray);
  }
}

generateQs();

const header = document.querySelector("header");
const createDiv = document.createElement("div");
const time = document.createElement("p");
header.appendChild(createDiv);
createDiv.appendChild(time);

function startTimer() {
  seconds = 60;
  if (timed) {
    clearInterval(timed);
  }
  timed = setInterval(timer, 1000);
}

function timer() {
  if (seconds > 0) {
    seconds--;
    time.innerText = seconds;
  } else {
    clearInterval(timed);
  }
}
