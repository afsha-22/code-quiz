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

if(localStorage.getItem("score")){
    var arrayScore = [];
    arrayScore.push(localStorage.getItem("score"))
} else{
    var arrayScore = [];
}

if(localStorage.getItem("name")){
    var trial = localStorage.getItem("name");
    var arrayName = trial.split(',');
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

function printRight(quest){
    console.log(quest +"inside the function")
    var pEl = document.createElement('p');
    var pText = document.createTextNode("Right!");
    pEl.style.borderTop = "thick solid #e3e1da";
    pEl.style.color = "#9E9D98"
    pEl.style.fontSize ="20px"
    pEl.appendChild(pText)
    if(quest==="question1"){
        question1.appendChild(pEl)
    } else if(quest==="question2"){
        question2.appendChild(pEl)
    } else if(quest==="question3"){
        question3.appendChild(pEl)
    }
    question(quest);
    scoreEl.textContent = tx;
}

function printWrong(quest){
    var pEl = document.createElement('p');
    var pText = document.createTextNode("Wrong!");
    pEl.appendChild(pText)
    pEl.style.borderTop = "thick solid #e3e1da";
    pEl.style.color = "#9E9D98"
    pEl.style.fontSize ="20px"
    if(quest==="question1"){
        question1.appendChild(pEl)
    } else if(quest==="question2"){
        question2.appendChild(pEl)
    } else if(quest==="question3"){
        question3.appendChild(pEl)
    }
}

function moveToQuest2(event){
    var element = event.target;
    var quest = element.getAttribute("data-quest")
    var ans = element.getAttribute("data-answer")
    if(ans==="wrong"){
        var res = wrongAns();
        printWrong(quest);
        if(res ==="wrong"){
            scoreEl.textContent = tx;
            return
        } else {
            var quest = element.getAttribute("data-quest")
            question(quest);
            scoreEl.textContent = tx;
        }
    } else{
        printRight(quest);
    }
}

function moveToQuest3(event){
    var element = event.target;
    var quest = element.getAttribute("data-quest")
    var ans = element.getAttribute("data-answer")
    if(ans==="wrong"){
        var res = wrongAns();
        printWrong(quest);
        if(res ==="wrong"){
            scoreEl.textContent = tx;
            return
        } else {
            var quest = element.getAttribute("data-quest")
            question(quest);
            scoreEl.textContent = tx;
        }
    } else {
        printRight(quest);
    }
}

function moveToLastPage(event){
    var element = event.target;
    var quest = element.getAttribute("data-quest")
    var ans = element.getAttribute("data-answer")
    if(ans==="wrong"){
        var res = wrongAns();
        printWrong(quest);
        if(res ==="wrong"){
            scoreEl.textContent = tx;
            return
        } else {
            var quest = element.getAttribute("data-quest")
            question(quest);
            scoreEl.textContent = tx;
        }
    } else {
        printRight(quest);
    }
    
}

function countdown(){
    var t = setInterval(function() {
        timerEl.textContent = tx
        if((tx===0) || (lastPageEl.style.display === 'block')) {
            stopTimer(t);
            welcomeEl.style.display = 'none';
            question1.style.display = 'none';
            question2.style.display = 'none';
            question3.style.display = 'none';
            lastPageEl.style.display = 'block';
            scoreEl.textContent = tx;
        }else{
            tx--;
        }
    }, 1000)
}

function stopTimer(t){
    clearInterval(t)
}

function wrongAns(){
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
    var nameText = nameEl.value;
    if(nameText===""||nameText===" ")
    {
        alert("Please enter the name")
        return;
    }
    scoreEl.textContent = tx;
    window.location.replace("highScore.html");
    storage();
}

function storage(){
    arrayScore.push(tx);

    localStorage.setItem("score", arrayScore)
    
    var nameText = nameEl.value;
    arrayName.push(nameText);
    localStorage.setItem("name", arrayName)
}

startBtn.addEventListener("click", startQuiz)
q1aBtn.addEventListener("click", moveToQuest2)
q1bBtn.addEventListener("click", moveToQuest2)
q1cBtn.addEventListener("click", moveToQuest2)
q1dBtn.addEventListener("click", moveToQuest2)

q2aBtn.addEventListener("click", moveToQuest3)
q2bBtn.addEventListener("click", moveToQuest3)
q2cBtn.addEventListener("click", moveToQuest3)
q2dBtn.addEventListener("click", moveToQuest3)

q3aBtn.addEventListener("click", moveToLastPage)
q3bBtn.addEventListener("click", moveToLastPage)
q3cBtn.addEventListener("click", moveToLastPage)
q3dBtn.addEventListener("click", moveToLastPage)

finalBtn.addEventListener("click", displayNameAndScore)
