containerEl = document.querySelector(".container")
var startBtn = document.getElementById("start");
var welcomeEl = document.querySelector(".first-page")
var question1 = document.querySelector(".quest1")
var q1aBtn = document.querySelector(".q1a")
var q1bBtn = document.querySelector(".q1b")
var q1cBtn = document.querySelector(".q1c")
var q1dBtn = document.querySelector(".q1d")
var question2 = document.querySelector(".quest2")
var q2aBtn = document.querySelector(".q2a")
var q2bBtn = document.querySelector(".q2b")
var q2cBtn = document.querySelector(".q2c")
var q2dBtn = document.querySelector(".q2d")
var question3 = document.querySelector(".quest3")
var q3aBtn = document.querySelector(".q3a")
var q3bBtn = document.querySelector(".q3b")
var q3cBtn = document.querySelector(".q3c")
var q3dBtn = document.querySelector(".q3d")
var lastPageEl = document.querySelector(".last-page")
var timerEl = document.getElementById("timer")
var scoreEl = document.querySelector(".display-score")
var nameEl = document.querySelector(".name")
var nameEl2 = document.querySelector(".name1")
var finalBtn = document.querySelector("#final-button")

var tx = timerEl.value;
tx = 20;
timerEl.textContent = tx;

// console.log(localStorage.getItem("score"))
// var trial = localStorage.getItem("name");
// console.log(trial)
// var split = trial.split(',');
// console.log(split +" split")
// console.log(split[1])

if(localStorage.getItem("score")){
    // arrayScore = [""];
    // console.log("In localStorage if condition "+localStorage.getItem("score"));
    // console.log("Array Score if local storage not emply "+arrayScore)
    var arrayScore = [];
    arrayScore.push(localStorage.getItem("score"))
    // console.log("Array Score if local storage not empty and after push "+arrayScore)
    // console.log('33333 '+arrayScore)
} else{
    console.log("Array Score if local storage IS emply "+arrayScore)
    var arrayScore = [];
    console.log("Array Score if local storage IS empty and after initialise "+arrayScore)
    // arrayScore = [""];
}

if(localStorage.getItem("name")){
    var trial = localStorage.getItem("name");
    var arrayName = trial.split(',');
    console.log(arrayName[0])
    // var arrayName = [];
    // arrayName.push(localStorage.getItem("name"))
} else {
    var arrayName = [];
}

function startQuiz(){
    countdown();
    if (welcomeEl){
        welcomeEl.style.display = 'none';
        question1.style.display = 'block'; 
    }
}

function question(quest){
    setTimeout(function(){
        if(quest==="question1"){
            question1.style.display = 'none';
            welcomeEl.style.display = 'none';
            question2.style.display = 'block';
        } else if(quest==="question2"){
            welcomeEl.style.display = 'none';
            question1.style.display = 'none';
            question2.style.display = 'none';
            question3.style.display = 'block';
        } else if(quest==="question3"){
            welcomeEl.style.display = 'none';
            question1.style.display = 'none';
            question2.style.display = 'none';
            question3.style.display = 'none';
            lastPageEl.style.display = 'block';
        }
    }, 400)
    
}

function moveToQuest2(event){
    var element = event.target;
    var ans = element.getAttribute("data-answer")
    if(ans==="wrong"){
        console.log("Question1: wrong ans")
        console.log(tx)
        var res = wrongAns();
        var pEl = document.createElement('p');
        var pText = document.createTextNode("Wrong!");
        pEl.appendChild(pText)
        pEl.style.borderTop = "thick solid #e3e1da";
        pEl.style.color = "#9E9D98"
        pEl.style.fontSize ="20px"
        question1.appendChild(pEl)
        if(res ==="wrong"){
            console.log("Question1 wrong ans and tx<0")
            console.log(tx)
            scoreEl.textContent = tx;
            // displayNameAndScore();
            return
        } else {
            console.log("Question1 wrong ans but tx>0")
            var quest = element.getAttribute("data-quest")
            question(quest);
            scoreEl.textContent = tx;
            // displayNameAndScore();
        }
    } else{
        var pEl = document.createElement('p');
        var pText = document.createTextNode("Right!");
        pEl.style.borderTop = "thick solid #e3e1da";
        pEl.style.color = "#9E9D98"
        pEl.style.fontSize ="20px"
        pEl.appendChild(pText)
        question1.appendChild(pEl)
        var quest = element.getAttribute("data-quest")
        question(quest);
        scoreEl.textContent = tx;
        // displayNameAndScore();
    }
}

function moveToQuest3(event){
    var element = event.target;
    var ans = element.getAttribute("data-answer")
    if(ans==="wrong"){
        console.log("question2 wrong ans")
        console.log(tx)
        var res = wrongAns();
        var pEl = document.createElement('p');
        var pText = document.createTextNode("Wrong!");
        pEl.style.borderTop = "thick solid #e3e1da";
        pEl.style.color = "#9E9D98"
        pEl.style.fontSize ="20px"
        pEl.appendChild(pText)
        question2.appendChild(pEl)
        if(res ==="wrong"){
            console.log("Question2 wrong ans and tx<0")
            console.log(tx)
            scoreEl.textContent = tx;
            // displayNameAndScore();
            return
        } else {
            console.log("Question2 wrong ans but tx>0")
            var quest = element.getAttribute("data-quest")
            question(quest);
            scoreEl.textContent = tx;
            // displayNameAndScore();
        }
    } else { 
        var pEl = document.createElement('p');
        var pText = document.createTextNode("Right!");
        pEl.style.borderTop = "thick solid #e3e1da";
        pEl.style.color = "#9E9D98"
        pEl.style.fontSize ="20px"
        pEl.appendChild(pText)
        question2.appendChild(pEl)
        var quest = element.getAttribute("data-quest")
        question(quest);
        scoreEl.textContent = tx;
        // displayNameAndScore();
    }
}

function moveToLastPage(event){
    var element = event.target;
    var ans = element.getAttribute("data-answer")
    if(ans==="wrong"){
        console.log("Question3 wrong ans")
        console.log(tx)
        var res = wrongAns();
        var pEl = document.createElement('p');
        var pText = document.createTextNode("Wrong!");
        pEl.style.borderTop = "thick solid #e3e1da";
        pEl.style.color = "#9E9D98"
        pEl.style.fontSize ="20px"
        pEl.appendChild(pText)
        question3.appendChild(pEl)
        if(res ==="wrong"){
            console.log("Question3 wrong ans and tx<0")
            console.log(tx)
            scoreEl.textContent = tx;
            // displayNameAndScore();
            return
        } else {
            console.log("Question3 wrong ans but tx>0")
            console.log(tx)
            var quest = element.getAttribute("data-quest")
            question(quest);
            scoreEl.textContent = tx;
            // displayNameAndScore();
        }
    } else {
        var pEl = document.createElement('p');
        var pText = document.createTextNode("Right!");
        pEl.style.borderTop = "thick solid #e3e1da";
        pEl.style.color = "#9E9D98"
        pEl.style.fontSize ="20px"
        pEl.appendChild(pText)
        question3.appendChild(pEl)
        var quest = element.getAttribute("data-quest")
        question(quest);
        scoreEl.textContent = tx;
        // displayNameAndScore();
    }
    
}

function countdown(){
    var t = setInterval(function() {
        timerEl.textContent = tx
        if((tx===0) || (lastPageEl.style.display === 'block')) {
            stopTimer(t);
        }else{
            tx--;
        }
    }, 1000)
}

function stopTimer(t){
    clearInterval(t)
}

function wrongAns(){
    console.log("wrong ans function"+tx)
    tx=tx-5;
    if(tx<0){
        tx=0
        welcomeEl.style.display = 'none';
        question1.style.display = 'none';
        question2.style.display = 'none';
        question3.style.display = 'none';
        lastPageEl.style.display = 'block';
        return "wrong";
    }else {
        return "right"
    }
}

function displayNameAndScore(){
    scoreEl.textContent = tx;
    // console.log(arrayScore+ " from display")
    storage();
}

function storage(){
    // console.log("First line of storage function before PUSH "+arrayScore)
    // scoreEl.textContent = tx;
    arrayScore.push(tx);
    // console.log("Array score after push in Storage "+arrayScore)

    localStorage.setItem("score", arrayScore)
    
    //Need to fix this
    var nameText = nameEl.value;
    arrayName.push(nameText);
    localStorage.setItem("name", arrayName)
}

startBtn.addEventListener("click", startQuiz)
q1aBtn.addEventListener("click", moveToQuest2)
q1bBtn.addEventListener("click", moveToQuest2)
q1cBtn.addEventListener("click", moveToQuest2)
q1dBtn.addEventListener("click", moveToQuest2)
// q1Btn.addEventListener("click", displayNameAndScore)

q2aBtn.addEventListener("click", moveToQuest3)
q2bBtn.addEventListener("click", moveToQuest3)
q2cBtn.addEventListener("click", moveToQuest3)
q2dBtn.addEventListener("click", moveToQuest3)

q3aBtn.addEventListener("click", moveToLastPage)
q3bBtn.addEventListener("click", moveToLastPage)
q3cBtn.addEventListener("click", moveToLastPage)
q3dBtn.addEventListener("click", moveToLastPage)

finalBtn.addEventListener("click", displayNameAndScore)
