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
    correct_answer: "Captures what&#039;s on the screen and copies it to your clipboard",
    incorrect_answers: ["Nothing", "Saves a .png file of what&#039;s on the screen in your screenshots folder in photos", "Closes all windows"],
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

const questionTitle = document.getElementById("quiz-question-title");
const possibleAnswers = document.getElementById("quiz-possible-answers");
const questionCounter = document.querySelector("p span");

//funzione per aggiungere domande e bottoni:
const addQuestion = function () {
  //svuoto ogni volta il contenuto del div
  possibleAnswers.innerHTML = "";

  //do il titolo ad ogni fomanda con il suo indice
  const everyQuestion = quizQuestions[questionIndex];
  questionTitle.innerText = everyQuestion.question;

  //prendo l'array di risposte errate e la risposta corretta e le assegno randomicamente:

  const answers = [...everyQuestion.incorrect_answers, everyQuestion.correct_answer];
  answers.sort(() => Math.random() - 0.5);

  //per ogni risposta creo un bottone
  answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.classList.add("answer-button");
    //ad ogni click sul bottone mi va avant la domanda (grazie all'indice)
    button.addEventListener("click", function () {
      questionIndex++;

      if (questionIndex < quizQuestions.length) {
        addQuestion();
      }
      /*TO DO add event listener per andare alla pagina del resulto*/
    });

    possibleAnswers.appendChild(button);
  });
};
addQuestion();

// per ogni riposta creo un bottone (in base al numero di risposte che ha everyQuestion)
/* answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.classList.add("answer-button");

    button.addEventListener("click", function () {
      questionIndex++;
    });
    if (questionIndex < quizQuestions.length) {
      addQuestion();
    }
    possibleAnswers.appendChild(button);
  });
};

addQuestion();*/
