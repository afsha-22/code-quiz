var startBtn = document.getElementById("start");
var welcomeEl = document.querySelector(".welcome-page")
var question1 = document.querySelector(".quest1")
var q1Btn = document.querySelectorAll(".q1")
var question2 = document.querySelector(".quest2")
var q2Btn = document.querySelectorAll(".q2")
var question3 = document.querySelector(".quest3")
var q3Btn = document.querySelectorAll(".q3")
var question4 = document.querySelector(".quest4")
var q4Btn = document.querySelectorAll(".q4")
var question5 = document.querySelector(".quest5")
var q5Btn = document.querySelectorAll(".q5")
var lastPageEl = document.querySelector(".last-page")
var timerEl = document.getElementById("timer")
var scoreEl = document.querySelector(".display-score")
var nameEl = document.querySelector(".name")
var finalBtn = document.querySelector("#final-button")

//Defining time as global variable
var time = timerEl.value;
time = 50;
timerEl.textContent = time;

//Before the game starts, checking if any score is stored in localstorage, if yes, save it in arrayScore
if(localStorage.getItem("score")){
    var arrayScore = [];
    arrayScore.push(localStorage.getItem("score"))
} else{
    var arrayScore = [];
}

//Before the game starts, checking if any name is stored in localstorage, if yes, save it in arrayScore
if(localStorage.getItem("name")){
    var trial = localStorage.getItem("name");
    var arrayName = trial.split(',');
} else {
    var arrayName = [];
}

//When quiz starts, begin the timer and display question1
function startQuiz(){
    countdown();
    if (welcomeEl){
        welcomeEl.style.display = 'none';
        question1.style.display = 'block'; 
    }
}

//Setting time interval with condition
function countdown(){
    var t = setInterval(function() {
        timerEl.textContent = time
        if((time===0) || (lastPageEl.style.display === 'block')) {
            stopTimer(t);
            welcomeEl.style.display = 'none';
            question1.style.display = 'none';
            question2.style.display = 'none';
            question3.style.display = 'none';
            question4.style.display = 'none';
            question5.style.display = 'none';
            lastPageEl.style.display = 'block';
            scoreEl.textContent = time;
        }else{
            time--;
        }
    }, 1000)
}

//Clearing time interval
function stopTimer(t){
    clearInterval(t)
}

//Display question1 and logic when answer is selected
function moveToQuest2(event){
    var element = event.target;
    for (var i = 0; i < q1Btn.length; i++) {
        q1Btn[i].disabled = true;
    }
    var quest = element.getAttribute("data-quest")
    var ans = element.getAttribute("data-answer")
    if(ans==="wrong"){
        var res = wrongAns();
        printWrong(quest);
        if(res ==="wrong"){
            scoreEl.textContent = time;
            return
        } else {
            question(quest);
            scoreEl.textContent = time;
        }
    } else{
        printRight(quest);
    }
}

//Display question2 and logic when answer is selected
function moveToQuest3(event){
    var element = event.target;
    for (var i = 0; i < q2Btn.length; i++) {
        q2Btn[i].disabled = true;
    }
    var quest = element.getAttribute("data-quest")
    var ans = element.getAttribute("data-answer")
    if(ans==="wrong"){
        var res = wrongAns();
        printWrong(quest);
        if(res ==="wrong"){
            scoreEl.textContent = time;
            return
        } else {
            question(quest);
            scoreEl.textContent = time;
        }
    } else {
        printRight(quest);
    }
}

//Display question3 and logic when answer is selected
function moveToQuest4(event){
    var element = event.target;
    for (var i = 0; i < q3Btn.length; i++) {
        q3Btn[i].disabled = true;
    }
    var quest = element.getAttribute("data-quest")
    var ans = element.getAttribute("data-answer")
    if(ans==="wrong"){
        var res = wrongAns();
        printWrong(quest);
        if(res ==="wrong"){
            scoreEl.textContent = time;
            return
        } else {
            question(quest);
            scoreEl.textContent = time;
        }
    } else {
        printRight(quest);
    } 
}

//Display question4 and logic when answer is selected
function moveToQuest5(event){
    var element = event.target;
    for (var i = 0; i < q4Btn.length; i++) {
        q4Btn[i].disabled = true;
    }
    var quest = element.getAttribute("data-quest")
    var ans = element.getAttribute("data-answer")
    if(ans==="wrong"){
        var res = wrongAns();
        printWrong(quest);
        if(res ==="wrong"){
            scoreEl.textContent = time;
            return
        } else {
            question(quest);
            scoreEl.textContent = time;
        }
    } else {
        printRight(quest);
    } 
}

//Display question5 and logic when answer is selected
function moveToLastPage(event){
    var element = event.target;
    for (var i = 0; i < q5Btn.length; i++) {
        q5Btn[i].disabled = true;
    }
    var quest = element.getAttribute("data-quest")
    var ans = element.getAttribute("data-answer")
    if(ans==="wrong"){
        var res = wrongAns();
        printWrong(quest);
        if(res ==="wrong"){
            scoreEl.textContent = time;
            return
        } else {
            question(quest);
            scoreEl.textContent = time;
        }
    } else {
        printRight(quest);
    } 
}

//Logic to reduce 5secs from the timer when wrong answer is selected
function wrongAns(){
    time=time-5;
    if(time<0){
        time=0
        welcomeEl.style.display = 'none';
        question1.style.display = 'none';
        question2.style.display = 'none';
        question3.style.display = 'none';
        question4.style.display = 'none';
        question5.style.display = 'none';
        lastPageEl.style.display = 'block';
        return "wrong";
    }else {
        return "right"
    }
}

//Adding new element below the 4 options to display "Wrong!" when wrong answer is selected
function printWrong(quest){
    var audio = new Audio("./assets/audio/wrongAnswer.mp3");
    audio.play();
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
    } else if(quest==="question4"){
        question4.appendChild(pEl)
    } else if(quest==="question5"){
        question5.appendChild(pEl)
    }
}

//Logic to display next question when an option is selected for previous question
function question(quest){
    setTimeout(function(){
        if(quest==="question1"){
            welcomeEl.style.display = 'none';
            question1.style.display = 'none';
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
            question4.style.display = 'block';
        } else if(quest==="question4"){
            welcomeEl.style.display = 'none';
            question1.style.display = 'none';
            question2.style.display = 'none';
            question3.style.display = 'none';
            question4.style.display = 'none';
            question5.style.display = 'block';
        } else if(quest==="question5"){
            welcomeEl.style.display = 'none';
            question1.style.display = 'none';
            question2.style.display = 'none';
            question3.style.display = 'none';
            question4.style.display = 'none';
            question5.style.display = 'none';
            lastPageEl.style.display = 'block';
        }
    }, 1000)  
}

//Adding new element below the 4 options to display "Right!" when right answer is selected
function printRight(quest){
    var audio = new Audio("./assets/audio/correctAnswer.mp3");
    audio.play();
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
    } else if(quest==="question4"){
        question4.appendChild(pEl)
    } else if(quest==="question5"){
        question5.appendChild(pEl)
    }
    question(quest);
    scoreEl.textContent = time;
}

//Logic when user enters the name on the last page
function displayNameAndScore(){
    var nameText = nameEl.value;
    if(nameText===""||nameText===" ")
    {
        alert("Please enter the name")
        return;
    }else {
        scoreEl.textContent = time;
        window.location.replace("highScore.html");
        storage();
    }
}

//Setting local storage
function storage(){
    arrayScore.push(time);
    localStorage.setItem("score", arrayScore)
    
    var nameText = nameEl.value;
    arrayName.push(nameText);
    localStorage.setItem("name", arrayName)
}

startBtn.addEventListener("click", startQuiz)

q1Btn.forEach(item => {
    item.addEventListener('click', moveToQuest2)
})

q2Btn.forEach(item => {
    item.addEventListener('click', moveToQuest3)
})

q3Btn.forEach(item => {
    item.addEventListener('click', moveToQuest4)
})

q4Btn.forEach(item => {
    item.addEventListener('click', moveToQuest5)
})

q5Btn.forEach(item => {
    item.addEventListener('click', moveToLastPage)
})

finalBtn.addEventListener("click", displayNameAndScore)
