//Declaring global variables:
let board = document.getElementById('rootBoard');
let currentQuestion = 0;
//saying shownHint = false/undefined;
let shownHint;
let hint = document.querySelector('#hintId');
//saying shownHint = false/undefined;
let gameOver;

const questionsAnswers = [
  {
    question: "what is 2+2?",
    choices: [1, 2, 3, 4],
    correctAnswer: 3,
    hint: "There is a hint for question 1"
  },
  {
    question: "what is 3*5?",
    choices: [10, 4, 15, 40],
    correctAnswer: 2,
    hint: "There is a hint for question 2"
  },
  {
    question: "what is 50-5?",
    choices: [1, 45, 3, 41],
    correctAnswer: 1,
    hint: "There is a hint for question 3"
  }
]

//just for us for now
function showQuestion() {
  console.log(questionsAnswers[currentQuestion].question);
  for(let i = 0; i <questionsAnswers[currentQuestion].choices.length; i++){
    console.log(i, questionsAnswers[currentQuestion].choices[i]);
  }
}

function matchGuess(input){
  if(input === questionsAnswers[currentQuestion].correctAnswer){
    console.log('Correct!');
    nextQuestion();
  }
  else if (!shownHint){
    hintAppears()
  }
  else {
    console.log('Game over');
    nextQuestion();
  }
}

function winningConditions(){
}

function nextQuestion(){
  winningConditions();
  currentQuestion += 1;
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
  console.log(questionsAnswers[currentQuestion].hint)
  //link with Id message
}

// currentQuestion = qustionsAnswers[];
function guess(correctAnswer){
 }

function scores() {
 }

function questionFunction() {
  let questLine = document.querySelector('h1');
  questLine.innerText = questionsAnswers[currentQuestion].question;
}

//Creating moving function for the character:
function canMove() {}

Creating start position and characters;
function startCharacters() {
// It's if we have 1 or 2 or more characters
// for(let i = 0; i < charactNum; j++) {
// the first cell has id=0; and we place the character to the cell first
//   let start = document.getElementById('0');
//   let character = document.createElement('div');
//   character.setAttribute('id', `characterId${j + 1}`);
//   character.setAttribute('style', 'background-image: url("images/nerd4.png")');
//   start.appendChild(character);
//  }
// }
//
//Getting an answer:
//function getAnswer() {

//Reset the board/next question:
//function restartBoard(){
//
//Create Welcome page
//Think about second player
//
