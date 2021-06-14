startBtn = document.getElementById("start");
welcomeEl = document.querySelector(".first-page")
question1 = document.querySelector(".quest1")
q1aBtn = document.querySelector(".q1a")
q1bBtn = document.querySelector(".q1b")
q1cBtn = document.querySelector(".q1c")
q1dBtn = document.querySelector(".q1d")
question2 = document.querySelector(".quest2")
q2aBtn = document.querySelector(".q2a")
q2bBtn = document.querySelector(".q2b")
q2cBtn = document.querySelector(".q2c")
q2dBtn = document.querySelector(".q2d")
question3 = document.querySelector(".quest3")
q3aBtn = document.querySelector(".q3a")
q3bBtn = document.querySelector(".q3b")
q3cBtn = document.querySelector(".q3c")
q3dBtn = document.querySelector(".q3d")
lastPageEl = document.querySelector(".last-page")
var timerEl = document.getElementById("timer")

var tx = timerEl.value;
tx = 10;
timerEl.textContent = tx;

function startQuiz(){
    countdown();
    if (welcomeEl){
        welcomeEl.style.display = 'none';
        question1.style.display = 'block'; 
    }
}

function countdown(){
    var t = setInterval(function() {
        tx--;
        timerEl.textContent = tx
        if(tx===0) {
            clearInterval(t)
        }
    }, 1000)  
}

function moveToQuest2(event){
    var element = event.target;
    var ans = element.getAttribute("data-answer")
    if(ans==="wrong"){
        wrongAns();
    }
    if(question1){
        question1.style.display = 'none';
        welcomeEl.style.display = 'none';
        question2.style.display = 'block';
    }
}

function wrongAns(){
    tx=tx-5;
}

function moveToQuest3(event){
    var element = event.target;
    var ans = element.getAttribute("data-answer")
    if(ans==="wrong"){
        wrongAns();
    }
    if(question2){
        welcomeEl.style.display = 'none';
        question1.style.display = 'none';
        question2.style.display = 'none';
        question3.style.display = 'block';
    }
}

function moveToLastPage(event){
    var element = event.target;
    var ans = element.getAttribute("data-answer")
    if(ans==="wrong"){
        wrongAns();
    }
    if(question3){
        welcomeEl.style.display = 'none';
        question1.style.display = 'none';
        question2.style.display = 'none';
        question3.style.display = 'none';
        lastPageEl.style.display = 'block';
    }
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
