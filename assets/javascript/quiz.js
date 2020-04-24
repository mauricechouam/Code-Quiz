//Function Timer

function startTimer(duration, display) {
    var timer = duration, seconds;
    
    setInterval(function () {
       seconds = parseInt(timer % 60, 10);
        seconds = seconds < 20 ? "" + seconds : seconds;
        display.textContent =   + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        else {
            
        }
    }, 1000);
}

window.onload = function () {
    var start = 20;
        display = document.querySelector('#time');
    startTimer(start, display);
};

function question(text, choices, answer) {  // funtion for question controller 
    this.text = text;
    this.choices = choices;
    this.answer = answer;       
}
question.prototype.correctansw = function (choice) { // functio correct answer
    return choice === this.answer;
}
function quiz(questions) { // quiz controller 
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}


