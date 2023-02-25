document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else{
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

/**
 * The main game "loop", called when the scrdpit is first loadeed
 * and after the uses's answer has been processed
 */
function runGame() {

    //creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnwer(params) {
    
}

function calculateCorrectAnswer() {

}

function incrementScore(params) {
    
}

function incrementWrongAnswer(params) {
    
}

function displayAdditionQuestion(params) {
    
}

function displaySubtractQuestion(params) {
    
}

function displayMultiplyQuestion(params) {
    
}

function displayDivideQuestione(params) {
    
}
