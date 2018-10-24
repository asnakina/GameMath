//Declaring global variables:
let currentQuestion = 0;
//saying shownHint = false/undefined;
let shownHint;
let hint = document.querySelector('#hintId');
let gameOver;
//let scores = 0;
//character.setAttribute('style', 'background-image: url("images/nerd4.jpg")');
const qBox = document.querySelector('#questBox');
let answersElem = document.querySelectorAll('.answersClass');

const questionsAnswers = [
  {
    question: "what is 2+2?",
    choices: [8, 2, 5, 4],
    correctAnswer: 4, //it's an index of the array above
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

document.querySelector('#messageLineId').textContent = "Welcome to the Game!"

// Creating start position and characters;
function placeCharacter(place) {
  let character = document.createElement('div');
  character.id = "characterId";
  // let startBox = document.querySelector('#boxId${i+1}')
  document.querySelector('#box0').appendChild(character);
  // switch currentQuestion
  // case: .boxes
  // console.log('working');
}
placeCharacter();
  let character = document.querySelector('#characterId');
  document.querySelector('#characterId').addEventListener('click', nextQuestion);

//Placing questions into question field
function showQuestion() {
  qBox.innerText = questionsAnswers[currentQuestion].question;
  for(let i = 0; i <questionsAnswers[currentQuestion].choices.length; i++){
    answersElem[i].innerHTML = questionsAnswers[currentQuestion].choices[i];
  }
}
showQuestion();

function matchGuess(value){
  // debugger
   // answersElem  - array
  if(value === questionsAnswers[currentQuestion].correctAnswer){
    console.log('here');
    document.querySelector('#messageLineId').textContent = "Correct!Congratulations!"
    // console.log('Correct!Congratulations!');
    nextQuestion();
  }
  else if (!shownHint){
    hintAppears()
    console.log('hint')
  }
  else {
    document.querySelector('#messageLineId').textContent = "Game over!"
    console.log('Game over');
    document.querySelector('#messageLineId').textContent = "Showing the correct answer!"
    console.log('Showing the correct answer');
    nextQuestion(); //do we need nextQuestion?
  }
}

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  let value;
  switch(e.keyCode){
    case 37:
      const left = document.querySelector('#left');
      value = left.innerText
      // console.log(value);
       matchGuess(value)
       break;
   case 38:
       const top = document.getElementById('top');
       value = top.innerText
       // console.log(value);
        matchGuess(value)
       break;
   case 39:
       const right = document.querySelector('#right');
       value = right.innerText
       matchGuess(value)
       break;
   case 40:
       const down = document.querySelector('#bottom');
       value = down.innerText
       matchGuess(value)
       break;
  }
})

// function keyCodeAnswers() {
//   questionsAnswers[currentQuestion].choices[i]
//   // answersElem  - array
//   input = document.querySelector('#left').questionsAnswers[currentQuestion].choices
// // answersElem  - array
//   matchGuess(input);
//   hintAppears();
// }

function nextQuestion(){
  debugger
  // let char = document.querySelector('#characterId');
  // winningConditions();
  currentQuestion += 1;
  document.querySelector(`#box${currentQuestion}`).appendChild(character);
  if(currentQuestion === questionsAnswers.length){
    gameover = true;
  }
  else {
    showQuestion();
    shownHint = false;
  }
}

//Hint appears:
function hintAppears(){
  shownHint = true;
  document.querySelector('#messageLineId').textContent = questionsAnswers[currentQuestion].hint;
  // console.log(questionsAnswers[currentQuestion].hint)
  //link with Id message
}

// Trying to use animation through JS
// function animationFunction() {
// let animation = setInterval(function(){
//   if (character.offsetLeft > 100){
//     console.log(character.offsetLeft);
//   clearInterval (animation);
//   let animation2 = setInterval(function() {
//     if (character.offsetLeft < 20) {
//       clearInterval(animation2);
//     } else {
//       character.style.left = character.offsetLeft - 1 + 'px';
//     }
//   }, 20);
// }
// else {
//   console.log(character.offsetLeft);
//   character.style.left = character.offsetLeft + 1 + 'px';
// }
// }, 20);
// }
// animationFunction()

//Reset the board/next question:
//function restartBoard(){
//
//Create Welcome page with 3 options of topics: "JavaScript", "general knoweledge", "nature".
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
// }
// Make text desapear behind the character
//Think about second player
//Add some animations to characters
