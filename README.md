                                     Project1
### Front-End Construction
The front-end for this project is constructed with JavaScript, as well as HTML and CSS.

## The link to this deployed project via Netlify: https://romantic-perlman-b2ea31.netlify.com

![Printscreen 1](/images/printscreen1.jpg)

![Printscreen 2](/images/printscreen2.jpg)

## About the game:
It's a browser version of the game to fun way to test your IQ, educate yourself, and revise on your knowledge.

## Categories page:
The site loads the first thing you will is the categories page with the instruction and the topics of questions.

## Choose a category:
When you choose a theme by clicking on it, the 2nd page will appear with 4 multiple-choice answers, question, message line, the animated character and steps/boxes for character to move.

## When a question appears and a variety of answers:
Choose a correct answer by press a keyboard arrow, which correlates to the answer

## Answering questions and moving forward:
If your chosen answer was correct, the character will move to the next box/step
If your answer was incorrect, you will get a hint and have a 2nd chance to answer it.
If your 2nd answer was wrong, the game is over.

## Winning conditions:
When your character gave all correct answers on the questions, it will be standing on the finish platform/box and rotating, signifying successfully completion of the quiz. After winning
the user will see the message on the message line, saying to click on this message line (now it becomes a button) to go back to the selection page.

## Losing conditions:
After losing you will see the message on the message line, saying to click on this area (now it becomes a button) to go back to the selection page. Or you can refresh the current page to start the same topic of questions over and try again.

Good luck and enjoy the game!

## Code Snippet:

```
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
```
