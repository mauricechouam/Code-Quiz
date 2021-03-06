
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
        ["A - toSource()", "B - sort()", "C - toString()", "D - unshift()"], "D - unshift()"),
    new question("What does CSS stand for?", ["A - Creative Style Sheets", "B - Compact Style Sheets",
        "C - Cascading Style Sheets", "D - Creative Simple Sheets"], "C - Cascading Style Sheets"),
    new question("What is the one of the most popular Javascript librarys?", ["A - JQuery", "B - JavaComm", "C - Java", "D - JSDB"], "A - JQuery"),
    new question("What does HTML stand for?", ["A - Home Tool Markup Language", "B -Hyper Text Markup Language",
        "C - Hyperlinks Text Markup Language", "D - Hyperlinks and Text Markup Language"], "C - Hyperlinks Text Markup Language"),
    new question("Which is the correct CSS syntax?", ["A -body {color: black;}", "B -{body:color=black;}", "C -body:color=black;", "D -{body;color:black;}"],
        "A -body {color: black;}")
];

var quizz = new quiz(questions);
var clicbutton = document.querySelector("#imag");
var decision = document.querySelector("#deci");
var element = document.querySelector("#quiz");
var progress2 = document.querySelector("#progress");
var currentime = 59;
var counter = 0;
var UserName = document.querySelector("#username");
var submit = document.querySelector("#sign-up");

var totalSeconds = 0;
var secondsElapsed = 0;
var status = "Working";
var interval;



//Function Timer
function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 60 ? "" + seconds : seconds;
        display.textContent = + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        else if (timer === 0) {
            element.innerHTML = "<h1> Game over</h1>" + "<h1 id='score'>Your Final Score is : " + counter + " </h1>" +

                "<input type= text name= EnterYourName id=username  placeholder=Enter_Your_Name_here />  <button class= bt id=sign-up >Sumbit</button </form> "
            clicbutton.innerHTML =
                progress2.innerHTML = "";
            startTimer(currentime, display);


        }
    }, 1000);
}

window.onload = function () {
    display = document.querySelector('#time');

};

function question(text, choices, answer) {  // funtion for question controller 
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
question.prototype.correctansw = function (choices) { // function correct answer
    return choices === this.answer;
}

question.prototype.wrongansw = function (choices) { // function correct answer
    return choices != this.answer;
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
    if (this.getquestionIndex().correctansw(answer)) {
        this.score++;
        decision.innerHTML = "Correct";
        counter++;
        localStorage.setItem("score", counter);
    }
    else {
        decision.innerHTML = "inCorrect";
        currentime = currentime - 3;
    }

    this.questionIndex++;


}


startgame();

function startgame() {
    clicbutton.addEventListener("click", function () {
        clicbutton.innerHTML = " <img id=image src=./assets/image/luck.gif width=50% height=120>"
        startTimer(currentime, display);
        play()
    })
}

function play() {
    if (quizz.end()) {

    } else {
        // display the question
        var element = document.getElementById("quest");
        element.innerHTML = quizz.getquestionIndex().text;

        //display choice
        var answerschoices = quizz.getquestionIndex().choices;
        for (var i = 0; i < answerschoices.length; i++) {
            var element = document.getElementById("answer" + i);
            element.innerHTML = answerschoices[i];
            guesses("bt" + i, answerschoices[i]);

        }
    }
    progress();
}

function guesses(id, guess) {
    var bts = document.getElementById(id)
    bts.onclick = function () {
        quizz.guess(guess);
        play();

    }
}

function score() {
    var finalscore = "<h1>Result</h1>";
    finalscorend += "<h2 id='score'>Score: " + quiz().score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = finalscore;

}
// function question progress
function progress() {
    var current = quizz.questionIndex + 1;
    progress2.innerHTML = "Question " + current + " of " + quizz.questions.length;

    if (current >= quizz.questions.length) {
        element.innerHTML = "<h1> Game over</h1>" + "<h1 id='score'>Your Final Score is : " + counter + " </h1>" +

            "<input type= text name= EnterYourName id=username  placeholder=Enter_Your_Name_here />  <button class= bt id=sign-up >Sumbit</button>  "
        clicbutton.innerHTML =
        progress2.innerHTML = "";



    }
}

 
// event listener for button submit
submit.addEventListener("click", function () {
    localStorage.setItem("score", counter);

    var Name = UserName.value;
    

    if (Name === "") {
        alert("error Name cannot be blank");
    }
    else {
        localStorage.setItem("Username", Name);
        localStorage.setItem("score", counter);
        displayMessage("success", "Registered successfully");
       

    }
});

