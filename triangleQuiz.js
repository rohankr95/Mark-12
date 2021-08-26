const submitAnswerButton = document.querySelector("#submit-answer-button");
const quizForm = document.querySelector(".quiz-form");
const output = document.querySelector("#output"); 

const correctAnswer = ["90°","right angled"];

submitAnswerButton.addEventListener("click",calculateScore);


function calculateScore(){
    let score=0;
    let index=0;
    const formResult = new FormData(quizForm);
    for(let value of formResult.values()){
        if(value===correctAnswer[index]){
            score++;
        }
        index++;
    }

    output.innerText = "Your score is " + score;
}