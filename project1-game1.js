//Declaring global variables:
let currentQuestion = 0;
//saying shownHint = false/undefined;
let shownHint;
let gameOver;
let hint = document.querySelector('#hintId');
//let scores = 0;
//character.setAttribute('style', 'background-image: url("images/nerd4.jpg")');
const qBox = document.querySelector('#questBox p');
let answersElem = document.querySelectorAll('.answersClass p');

const questAnswVariety = {
  math: [
    {
      question: "what is 2+2?",
      choices: [8, 2, 5, 4],
      correctAnswer: 4,
      hint: "There is a hint for question 1"
    },
    {
      question: "what is 3*5?",
      choices: [10, 4, 15, 40],
      correctAnswer: 15,
      hint: "There is a hint for question 2"
    },
    {
      question: "what is 50-5?",
      choices: [1, 45, 3, 41],
      correctAnswer: 45,
      hint: "There is a hint for question 3"
    },
    {
      question: "what is 1+1?",
      choices: [1, 2, 3, 4],
      correctAnswer: 2,
      hint: "There is a hint for question 4"
    },
    {
      question: "what is 10-3?",
      choices: [10, 4, 15, 7],
      correctAnswer: 7,
      hint: "There is a hint for question 5"
    },
    {
      question: "what is 81%9?",
      choices: [1, 6, 9, 8],
      correctAnswer: 9,
      hint: "There is a hint for question 6"
    }
  ],
  javascript: [
    {
      question: "Arrays start at...",
      choices: [8, 2, 5, 0],
      correctAnswer: 0,
      hint: "There is a hint for question 1"
    },
    {
      question: "What fruit represents New Zealand?",
      choices: ['kiwi', 'banana', 'peach', 'orange'],
      correctAnswer: 'kiwi',
      hint: "There is a hint for question 2"
    },
    {
      question: "what is 50-5?",
      choices: [1, 45, 3, 41],
      correctAnswer: 45,
      hint: "There is a hint for question 3"
    },
    {
      question: "what is 1+1?",
      choices: [1, 2, 3, 4],
      correctAnswer: 2,
      hint: "There is a hint for question 4"
    },
    {
      question: "what is 10-3?",
      choices: [10, 4, 15, 7],
      correctAnswer: 7,
      hint: "There is a hint for question 5"
    },
    {
      question: "what is 81%9?",
      choices: [1, 6, 9, 8],
      correctAnswer: 9,
      hint: "There is a hint for question 6"
    }
  ],
  generalKnowledge: [
    {
      question: "what is 2+2?",
      choices: [8, 2, 5, 4],
      correctAnswer: 4,
      hint: "There is a hint for question 1"
    },
    {
      question: "what is 3*5?",
      choices: [10, 4, 15, 40],
      correctAnswer: 15,
      hint: "There is a hint for question 2"
    },
    {
      question: "what is 50-5?",
      choices: [1, 45, 3, 41],
      correctAnswer: 45,
      hint: "There is a hint for question 3"
    },
    {
      question: "what is 1+1?",
      choices: [1, 2, 3, 4],
      correctAnswer: 2,
      hint: "There is a hint for question 4"
    },
    {
      question: "what is 10-3?",
      choices: [10, 4, 15, 7],
      correctAnswer: 7,
      hint: "There is a hint for question 5"
    },
    {
      question: "what is 81%9?",
      choices: [1, 6, 9, 8],
      correctAnswer: 9,
      hint: "There is a hint for question 6"
    }
  ]
}

let questionsAnswers;

function outOfModal(e) {
  // debugger
  e.preventDefault();
  //"this" - it's "e.currentTarget"
  //we match id names and names of topics
  questionsAnswers = questAnswVariety[this.id];
  console.log(this.id);
  document.getElementById('modal').style.visibility = 'hidden';
  showQuestAnsw();
}
  document.querySelectorAll('.topics').forEach(oneOftopics => {
  oneOftopics.addEventListener('click', outOfModal);
});

function pickTopic(topic) {
  questionsAnswers = questAnswVariety[topic];
}

  document.querySelector('#messageLineId p').textContent = "Welcome to the Game!"

//Creating start position and characters;
function placeCharacter(place) {
  let character = document.createElement('div');
  character.id = "characterId";
  //let startBox = document.querySelector('#boxId${i+1}')
  document.querySelector('#box0').appendChild(character);
}
  placeCharacter();
  let character = document.querySelector('#characterId');

//Placing questions into question field
function showQuestAnsw() {
  qBox.innerText = questionsAnswers[currentQuestion].question;
  for(let i = 0; i <questionsAnswers[currentQuestion].choices.length; i++) {
  answersElem[i].innerHTML = questionsAnswers[currentQuestion].choices[i];
  }
}
// showQuestAnsw();

function matchGuess(value) {
  if(value === questionsAnswers[currentQuestion].correctAnswer.toString()) {
  //console.log('works');
  document.querySelector('#messageLineId p').textContent = "That is correct answer!"
  //console.log('Correct!Congratulations!');
  nextQuestion();
  }
  else if (!shownHint) {
  hintAppears()
  console.log('hint is here')
  }
  else {
  document.querySelector('#messageLineId p').textContent = `That was incorrect answer again. Game over. Correct answer was: ${questionsAnswers[currentQuestion].correctAnswer}`
  qBox.innerText = "Click to pick a new topic"
  
  //qBox.addEventListener('click', ()=>location.reload());
  console.log('locat.reload works');

    // let button = document.createElement('div');
    // button.id = "buttonId";
    // document.querySelector('#buttonId').appendChild(character);
    // qBox.innerText = document.querySelector('#')
    // location.reload();

  // console.log('Game over');
  // console.log('Showing the correct answer');
  for(let i = 0; i < 4; i++) {
    answersElem[i].innerHTML = '';
  }
  end();
  }
}

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  if(gameOver) return;
  let value;
  switch(e.keyCode) {
    case 37:
      const left = document.querySelector('#left');
      value = left.innerText
      // console.log(value);
       matchGuess(value)
       // animationFunction();
       break;
    case 38:
       const top = document.getElementById('top');
       value = top.innerText
       // console.log(value);
        matchGuess(value)
        // animationFunction();
       break;
   case 39:
       const right = document.querySelector('#right');
       value = right.innerText
       matchGuess(value)
       // animationFunction();
       break;
   case 40:
       const down = document.querySelector('#bottom');
       value = down.innerText
       matchGuess(value)
       // animationFunction();
       break;
  }
});

function start() {
  // debugger
  //to hide text on start box when the game begins
  const currentQuestionBox = document.querySelector(`#box${currentQuestion}`)
  currentQuestionBox.querySelector('p').classList.add('hidden');
}
  //document.addEventListener('keydown', e);
  //}

function end() {
  gameOver = true;
  //document.removeEventListener('keydown', e);
}

function nextQuestion() {
  //first - finding the current box with the character
  //second - we find <p> inside that box, this <p> has class "hidden"
  //we remove that class, then we increase currentQuestion by 1
  //and add class 'hidden' to <p> of new current box
  let currentQuestionBox = document.querySelector(`#box${currentQuestion}`)
  currentQuestionBox.querySelector('p').classList.remove('hidden');
  currentQuestionBox.removeChild(character);

  currentQuestion += 1;

  currentQuestionBox = document.querySelector(`#box${currentQuestion}`)
  currentQuestionBox.querySelector('p').classList.add('hidden');
  currentQuestionBox.appendChild(character);
  //document.querySelector(`#box${currentQuestion}`).appendChild(character);

  if(currentQuestion === questionsAnswers.length) {
    // gameover = true;
    victory();
  }
   else {
     showQuestAnsw();
     shownHint = false;
  }
}

function victory() {
  qBox.innerText = 'Refresh page to start over';
  for(let i = 0; i < 4; i++) {
    answersElem[i].innerHTML = '';
  }
  document.querySelector('#messageLineId p').textContent = "You win!"
  character.classList.add('animMoveWin');
  //character.querySelector('characterId').classList.add('.animMoveWin');
  //- is it correct?
  end();
}

//Hint appears:
function hintAppears() {
  shownHint = true;
  document.querySelector('#messageLineId p').textContent = questionsAnswers[currentQuestion].hint;
  console.log(questionsAnswers[currentQuestion].hint);
}

 start();

 //Reset the board/next question:
 //should we call the start() for reset?
 //function restartBoard(){
 //
 //Create Welcome page with 3 options of topics: "JavaScript", "general knoweledge", "nature".
 //Add some animations to characters

 //Trying to use animation through JS
// function animationFunction() {
//   // debugger
// let animation = setInterval(function(){
//   if (character.offsetLeft > 100){
//   console.log(character.offsetLeft);
//   clearInterval (animation);
//   let animation2 = setInterval(function() {
//     if (character.offsetLeft < 20) {
//       clearInterval (animation2);
//     } else {
//       character.style.left = character.offsetLeft - 1 + 'px';
//     }
//   }, 20);
// }
// else {
//   console.log(character.offsetLeft);
//   character.style.left = character.offsetLeft + 1 + 'px';
//   }
//  }, 20);
// }
// animationFunction();


// function chooseTopics(value) {
// document.querySelector('#characterId').addEventListener('click', nextQuestion);
// if(value === questionsAnswers[currentQuestion].correctAnswer.toString()){
//console.log('works');

// Use click/move action: document.querySelector('#characterId').addEventListener('click', nextQuestion);

// function winningConditions(){}
// function scores(input) {
//   for(let i = 0; i <questionsAnswers[i].length; i++){
//   if(input === questionsAnswers[currentQuestion].correctAnswer){
//   scores += 1;
// }
//   else {
//     hintAppears();
//   }
//  }
