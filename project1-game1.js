                       //Declaring global variables:
let currentQuestion = 0;
//saying shownHint = false/undefined;
let shownHint;
//saying that gameOver = false/undefined;
let gameOver;
let hint = document.querySelector('#hintId');
const qBox = document.querySelector('#questBox p');
let answersElem = document.querySelectorAll('.answersClass');

const questAnswVariety = {
  math: [
    {
      question: "what is 2+2?",
      choices: [8, 2, 5, 4],
      correctAnswer: 4,
      hint: "1+1 = 2. Think about 2+2 now"
    },
    {
      question: "what is 3*5?",
      choices: [10, 4, 15, 40],
      correctAnswer: 15,
      hint: "1*5 = 5 and 2*5 = 10. Think about 3*5 now"
    },
    {
      question: "what is 50-5?",
      choices: [1, 45, 3, 41],
      correctAnswer: 45,
      hint: "10-5 = 5 and 20-5 = 15.Think about 50-5 now"
    },
    {
      question: "what is 2^3?",
      choices: [8, 6, 3, 4],
      correctAnswer: 8,
      hint: "2^2 = 4 and 1^3 = 1.Think about 2^3 now"
    },
    {
      question: "what is (10-3)*10?",
      choices: [10, 70, 15, 7],
      correctAnswer: 70,
      hint: "(2+3)*8 = 40. Think about (10-3)*10 now"
    },
    {
      question: "what is 81/9?",
      choices: [1, 6, 9, 8],
      correctAnswer: 9,
      hint: "99/9 = 11. Think about 81/9 now"
    }
  ],
  javascript: [
    {
      question: "How long did it take to develop the scripting language JS which was then known as Mocha?",
      choices: ['1 year', '1 year and 10 months', '10 months', '10 days'],
      correctAnswer: '10 days',
      hint: "It took Eich such a short time to develop the scripting language"
    },
    {
      question: "[1, 2, 3] + [4, 5, 6] equals: ",
      choices: ['[5, 7, 9]', '[14, 25, 36]', '[1, 2, 34, 5, 6]', "'1, 2, 34, 5, 6'"],
      correctAnswer: "'1, 2, 34, 5, 6'",
      hint: "It won't be an array anymore"
    },
    {
      question: "What category of this function is: const greet=()=>{}",
      choices: ['function declaration', 'arrow function', 'function expression', 'not a function'],
      correctAnswer: 'arrow function',
      hint: "The name will contain the symbol in this formula"
    },
    {
      question: "What equivalents to If/Else statement?",
      choices: ['for loop', 'switch statement', 'forEach loop', 'while loop'],
      correctAnswer: 'switch statement',
      hint: "for loop already equivalents while loop"
    },
    {
      question: "What will this evaluate to: NaN == NaN?",
      choices: ['true', 'correct', 'false', 'undefined'],
      correctAnswer: 'false',
      hint: "NaN doesn't equal anything, even itself"
    },
    {
      question: "How to get the last index of a string in Javascript?",
      choices: ['string.length + 1', 'string.length', 'string.length - 1', 'string.last'],
      correctAnswer: 'string.length - 1',
      hint: "If we have an array: let array = [1, 2]; then 1 will have index 0, 2 will have index 1"
    }
  ],
  generalKnowledge: [
    {
      question: "The bacteriologist who discovered penicillin was?",
      choices: ['Albert Einstein', 'Dmitri Mendeleev', 'Charles Darwin', 'Alexander Fleming'],
      correctAnswer: 'Alexander Fleming',
      hint: "He was Scottish bacteriologist"
    },
    {
      question: "What fruit represents New Zealand?",
      choices: ['kiwi', 'banana', 'peach', 'orange'],
      correctAnswer: 'kiwi',
      hint: "Same name bird is a symbol of this country"
    },
    {
      question: "New York State is known as...?",
      choices: ['Lonestar State', 'Empire State', 'Trump State', '5 Borough State'],
      correctAnswer: 'Empire State',
      hint: "What was the tallest building in the world from 1931-1970?"
    },
    {
      question: "The purest form of water can be obtained from: ",
      choices: ['a deep tubewell', 'a running stream', 'a hot water spring', 'a heavy shower of rain'],
      correctAnswer: 'a heavy shower of rain',
      hint: "There was a reason how people collected water thousands of years ago"
    },
    {
      question: "In which of the following pairs, the two substances forming the pair are chemically most dissimilar?",
      choices: ['Sugar and paper', 'Butter and paraffin wax', 'Chalk and marble', '	Charcoal and diamond'],
      correctAnswer: 'Butter and paraffin wax',
      hint: "Sugar and paper are both Carbohydrates.Chalk and marble are from Calcium.Charcoal and diamond are different forms of Carbon."
    },
    {
      question: "Which is the longest river in the world?",
      choices: ['Mississippi', 'Nile', 'Amazon', 'Yangtze'],
      correctAnswer: 'Amazon',
      hint: "The name of this river is taken by one of the successful modern companies selling products in Internet"
    }
  ]
}

let questionsAnswers;

function outOfModal(e) {
  //without e.preventDefault() the page tries to a categories page and can't
  e.preventDefault();
  // mainPageSound.stop();
  //"this" - it's "e.currentTarget"
  //we match id names and names of categories
  questionsAnswers = questAnswVariety[this.id];
  // console.log(this.id);
  document.getElementById('modal').style.visibility = 'hidden';
  showQuestAnsw();
}

  document.querySelectorAll('.topics').forEach(oneOftopics => {
  oneOftopics.addEventListener('click', outOfModal);
});

document.querySelector('#messageLineId p').textContent = "Welcome to the Game!The quiestion is below.The answers are above."

//Creating the character and it's start position:
function placeCharacter(place) {
  let character = document.createElement('div');
  character.id = "characterId";
  //character.setAttribute('style', 'background-image: url("images/nerd4.jpg")');
  document.querySelector('#box0').appendChild(character);
  //let startBox = document.querySelector('#boxId${i+1}')
}
  placeCharacter();

  let character = document.querySelector('#characterId');

//Placing questions into the question field - qBox.And placing answers into answer's fields;
function showQuestAnsw() {
  qBox.innerText = questionsAnswers[currentQuestion].question;
  for(let i = 0; i <questionsAnswers[currentQuestion].choices.length; i++) {
  answersElem[i].innerHTML = questionsAnswers[currentQuestion].choices[i];
  }
}

function matchGuess(value) {
  if (value === questionsAnswers[currentQuestion].correctAnswer.toString()) {
    document.querySelector('#messageLineId p').textContent = "Your previous answer was correct! Here is your next question: "
    //nextQuestion();
    setTimeout(() => nextQuestion(), 500); //delay to show selected answer for 500ms before going to tne next question
  } else if (!shownHint) {
    setTimeout(() => changeColor(), 500);  //delay to show selected answer for 500ms before clearing the background
    hintAppears();
  } else {
    document.querySelector('#messageLineId p').textContent = `That was incorrect answer again. Game over. Correct answer was: ${questionsAnswers[currentQuestion].correctAnswer}`
    qBox.innerText = "Click to pick a new topic";
    qBox.addEventListener('click', () => location.reload());
    for(let i = 0; i < 4; i++) {
      answersElem[i].innerHTML = '';
    }
    end();
  }
}

 document.addEventListener('keydown', (e) => {
  // e.preventDefault();
  keySound.play();
  if(gameOver) return;
  let value;
  switch(e.keyCode) {
    case 37:
      const left = document.querySelector('#left');
      left.style.background = 'red';
      value = left.innerText;
      // or value = document.querySelector('#left').innerText;
      matchGuess(value);
      break;
    case 38:
      const top = document.getElementById('top');
      top.style.background = 'red';
      value = top.innerText;
      matchGuess(value);
      break;
    case 39:
      const right = document.querySelector('#right');
      right.style.background = 'red';
      value = right.innerText;
      matchGuess(value);
      break;
    case 40:
      const down = document.querySelector('#bottom');
      down.style.background = 'red';
      value = down.innerText;
      matchGuess(value);
      break;
  }
});

function start() {
  preload();
  // mainPageSound.play();
  //to hide text on start box when the game begins
  currentQuestion = 0;
  const currentQuestionBox = document.querySelector(`#box${currentQuestion}`)
  //we find <p> inside the box and give it a class "hidden" with display: none
  currentQuestionBox.querySelector('p').classList.add('hidden');
}
  //document.addEventListener('keydown', e);
  //}

function end() {
  changeColor();
  failSound.play();
  gameOver = true;
  //document.removeEventListener('keydown', e);
}

function nextQuestion() {
  //first - finding the current box with the character
  //second - we find <p> inside that box, this <p> has class "hidden" with display: none
  //we remove that class and the character, then we increase currentQuestion by 1
  //and add the class 'hidden' to <p> of new current box and place the character as well
  let currentQuestionBox = document.querySelector(`#box${currentQuestion}`)
  currentQuestionBox.querySelector('p').classList.remove('hidden');
  currentQuestionBox.removeChild(character);

  changeColor();

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
  qBox.innerText = 'Click to pick a new topic';
  qBox.addEventListener('click', () => location.reload());
  for(let i = 0; i < 4; i++) {
    answersElem[i].innerHTML = '';
  }
  document.querySelector('#messageLineId p').textContent = "You win! Congratulations!"
  character.classList.add('animMoveWin');
  winSound.play();
  //character.querySelector('characterId').classList.add('.animMoveWin');
  end();
}

            //Hint appears:
function hintAppears() {
  shownHint = true;
  document.querySelector('#messageLineId p').textContent = questionsAnswers[currentQuestion].hint;
}

            //Sounds:
let mainPageSound;
let winSound;
let failSound;
let keySound;
function preload() {
  // console.log('sounds');
  mainPageSound = new Audio('./sounds/mainPageAudio.mp3');
  winSound = new Audio('./sounds/winAudio.mp3');
  failSound = new Audio('./sounds/failAudio.mp3');
  keySound = new Audio('./sounds/keySound.mp3');
  //yesSound = loadSound('./sounds/yesAudio.mp3');
}

             //Colors:
function changeColor() {
  let answersElem = document.querySelectorAll('.answersClass');
  answersElem.forEach((el) => {
    el.style.background = '#a29bfe';
  });
}

  start();
