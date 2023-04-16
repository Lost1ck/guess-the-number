'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
}

document.querySelector(".button__check").addEventListener("click", function(){
    const guess = Number (document.querySelector(".level").value);
    console.log(guess);


    if(!guess) {
        displayMessage("Вы не ввели число");
    } else if (guess === secretNumber) {
        displayMessage("Вы победили");
        document.querySelector("body").style.background = "green";
        document.querySelector(".number").textContent = guess;
        if(score > highScore){
            highScore = score;
            document.querySelector(".score").textContent = highScore;
        }



    } else if (guess !== secretNumber) {
        if (score > 1) {
            if(guess > secretNumber) {
                displayMessage("Число больше");
                score--;
                document.querySelector(".score__atempts ").textContent =  score;
            }else if(guess < secretNumber){
                displayMessage("Число меньше");
                score--;
                document.querySelector(".score__atempts").textContent =  score;
            }
        } else {
            displayMessage("Вы проиграли")
            document.querySelector(".score__atempts").textContent =  0;
        }
    }
})


document.querySelector(".button__again").addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);
    displayMessage("Начните угадывать");
    document.querySelector(".score__atempts").textContent = score
    document.querySelector(".score").textContent = highScore;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".level").value = " ";
    document.querySelector("body").style.background = "gray";
})