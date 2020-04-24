//Function Timer
function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 20 ? "" + seconds : seconds;
        display.textContent = + seconds;

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


function question(text,choices, answer) {  // funtion for question controller 
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
question.prototype.correctansw = function (choices) { // function correct answer
    return choices === this.answer;
}

function quiz(questions) { // quiz controller 
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

quiz.prototype.getquestionIndex = function () {
    return this.questions[this.questionIndex];
}

quiz.prototype.end = function () {
    return this.questions.lenght === this.questionIndex
}

quiz.prototype.guess = function (answer) {
    this.questionIndex++;
    if (this.getquestionIndex().correctansw(answer)) {
        this.score++;
    }

}

// create some Local variables

var questions = [
    new question("Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
        ["A - last()", "B - put()", "C - push()", "D - None of the above."], "C - push()"),
    new question("Which built-in method returns the calling string value converted to upper case?", ["A - toUpperCase()", "B - toUpper()",
        "C - changeCase(case)", "D - None of the above."], "A - toUpperCase()"),
    new question("Which of the following function of Boolean object returns a string of either 'true' or 'false' depending upon the value of the object?",
        ["A - toSource()", "B - valueOf()", "C - toString()", "D - None of the above."], "C - toString()"),
    new question(" Which of the following function of Array object creates a new array with the results of calling a provided function on every element in this array?",
        ["A - push()", "B - join()", "C - pop()", "D - map()"], "D - map()"),
    new question("Which of the following function of String object is used to match a regular expression against a string?",
        ["A - concat()", "B - match()", "C - search()", "D - replace()"], "D - replace()"),
    new question("Which of the following function of Array object sorts the elements of an array?",
        ["A - toSource()", "B - sort()", "C - toString()", "D - unshift()"], "D - unshift()")

];

var quizz = new quiz(questions);
play();

function play() {
    if (quizz.end()) {
        
    } else {
    // display the question
        var element = document.getElementById("quest");
        element.innerHTML = quizz.getquestionIndex().text;

    //display choice
        var answerschoices = quizz.getquestionIndex().choices;
        for (var i = 0; i < answerschoices.length; i++){
            var element = document.getElementById("answer" +1);
            element.innerHTML = answerschoice[i];
            
        }
    }
}
