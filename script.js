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

// var q1Btn = document.querySelectorAll(".q1")

var tx = timerEl.value;
tx = 10;
timerEl.textContent = tx;

// Check this later
// var arrayScore;

// // if(localStorage.getItem("score"))
// // {
// //     tx=localStorage.getItem("score")
// //     // arrayScore.push(tx)
// // }
// // else{
// //     arrayScore = [];
// // } 

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
    }, 1000)
    
}

function moveToQuest2(event){
    var element = event.target;
    var ans = element.getAttribute("data-answer")
    if(ans==="wrong"){
        wrongAns();
        var pEl = document.createElement('p');
        var pText = document.createTextNode("Wrong");
        pEl.appendChild(pText)
        question1.appendChild(pEl)
    } else if(ans==="right"){
        var pEl = document.createElement('p');
        var pText = document.createTextNode("Right");
        pEl.appendChild(pText)
        question1.appendChild(pEl)
    }
    var quest = element.getAttribute("data-quest")
    question(quest);
}

function moveToQuest3(event){
    var element = event.target;
    var ans = element.getAttribute("data-answer")
    if(ans==="wrong"){
        wrongAns();
        var pEl = document.createElement('p');
        var pText = document.createTextNode("Wrong");
        pEl.appendChild(pText)
        question2.appendChild(pEl)
    } else if(ans==="right"){
        var pEl = document.createElement('p');
        var pText = document.createTextNode("Right");
        pEl.appendChild(pText)
        question2.appendChild(pEl)
    }
    var quest = element.getAttribute("data-quest")
    question(quest);
}

function moveToLastPage(event){
    var element = event.target;
    var ans = element.getAttribute("data-answer")
    if(ans==="wrong"){
        wrongAns();
        var pEl = document.createElement('p');
        var pText = document.createTextNode("Wrong");
        pEl.appendChild(pText)
        question3.appendChild(pEl)
    } else if(ans==="right"){
        var pEl = document.createElement('p');
        var pText = document.createTextNode("Right");
        pEl.appendChild(pText)
        question3.appendChild(pEl)
    }
    var quest = element.getAttribute("data-quest")
    question(quest);
    displayNameAndScore();
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
    tx=tx-5;
    if(tx<0){
        tx=0
    }
    // qresult();
}

// function qresult(){
//     var pEl = document.createElement('p');
//     var pText = document.createTextNode("Wrong");
//     pEl.appendChild(pText)
//     containerEl.appendChild(pEl)
// }

function displayNameAndScore(event){
    scoreEl.textContent = tx;
    storage();
}

function storage(){

    // scoreEl.textContent = tx;
    // arrayScore.push(tx);
    // console.log(arrayScore)
    localStorage.setItem("score", tx)

    var nameText = nameEl.value;
    localStorage.setItem("name", nameText)
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
