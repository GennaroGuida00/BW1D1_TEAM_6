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

let questionIndex = 0;
let scoreCorrect = 0;
let scoreWrong = 0;
let timer;

const questionTitle = document.getElementById("quiz-question-title");
const possibleAnswers = document.getElementById("quiz-possible-answers");
const questionCounter = document.querySelector("p span");
const timerDisplay = document.getElementById("quiz-timer");
const questionCounterToHide = document.getElementById("questionIndex");

document.addEventListener("DOMContentLoaded", function () {
  const addQuestion = function () {
    clearTimeout(timer);
    possibleAnswers.innerHTML = "";

    const everyQuestion = quizQuestions[questionIndex];
    questionTitle.innerText = everyQuestion.question;

    if (questionIndex >= quizQuestions.length) {
      results();
      return;
    }

    document.getElementById("currentQuestion").innerText = questionIndex + 1;
    document.getElementById("allQuestions").innerText = `/ ${quizQuestions.length}`;
    document.getElementById("currentQuestion").style.color = "#fff";
    //ordine delle risposte random
    const answers = [...everyQuestion.incorrect_answers, everyQuestion.correct_answer];
    answers.sort(() => Math.random() - 0.5);
    //creo i bottoni delle risposte
    answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerText = answer;
      button.classList.add("answer-button");

      button.addEventListener("click", function () {
        clearTimeout(timer);
        if (answer === everyQuestion.correct_answer) {
          scoreCorrect++;
        } else {
          scoreWrong++;
        }

        questionIndex++;

        if (questionIndex < quizQuestions.length) {
          addQuestion();
        } else {
          possibleAnswers.className = "display";
          questionCounterToHide.className = "display";
          results();
        }
      });

      possibleAnswers.appendChild(button);
    });

    startTimer();
  };

  const startTimer = function () {
    let timeLeft = 30;
    const totalTime = 30;
    const innerNumber = document.getElementById("inner-number");
    const blueRing = document.querySelector(".blueRing");

    innerNumber.textContent = timeLeft;
    blueRing.setAttribute("stroke-dashoffset", "100");

    timer = setInterval(() => {
      timeLeft--;
      innerNumber.textContent = timeLeft;
      //calcolo la percentuale di tempo trascorso in secondi
      const progress = ((totalTime - timeLeft) / totalTime) * 100;
      const newOffset = 100 - progress;
      //svuoto il cerchio blu in base al tempo trascorso
      blueRing.setAttribute("stroke-dashoffset", newOffset.toString());

      if (timeLeft === 0) {
        clearInterval(timer);
        scoreWrong++;
        questionIndex++;
        if (questionIndex < quizQuestions.length) {
          addQuestion();
        } else {
          possibleAnswers.className = "display"; //nascondo timer
          questionCounterToHide.className = "display"; //nascondo counter
          results();
        }
      }
    }, 1000);
  };
  //funzione pagina dei risultati
  const results = function () {
    const grafico = document.getElementById("grafico");
    grafico.classList.remove("display");
    grafico.classList.add("visible");

    const bottone = document.getElementById("bottone");
    bottone.className = "visible";

    questionTitle.innerText = "Results";
    questionTitle.classList.add("fontFamily");

    const correctAnswers = document.getElementById("correct-answers");
    const wrongAnswers = document.getElementById("wrong-answers");

    const div = document.getElementById("results");
    div.classList.remove("display");
    div.classList.add("visible");

    correctAnswers.innerText = scoreCorrect;
    wrongAnswers.innerText = scoreWrong;

    const timerContainer = document.getElementById("timer-container");
    timerContainer.className = "display";
    timerContainer.innerText = "";

    const textInside = document.getElementById("text-inside");

    if (textInside) {
      if (scoreCorrect >= scoreWrong) {
        textInside.textContent = "Congratulation, you've passed the exam!";
        textInside.classList.add("inner-text");
      } else {
        textInside.textContent = "Sorry, you have to repeat the exam";
        textInside.classList.add("inner-text");
      }
    }
  };

  addQuestion();
});
