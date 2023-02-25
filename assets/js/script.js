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

function runGame() {

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
