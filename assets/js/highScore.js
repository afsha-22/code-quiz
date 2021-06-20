var clearBtn = document.querySelector(".clear")
var newEl = document.querySelector(".new-element")
var backBtn = document.querySelector(".back")

//Getting data from local storage
var arrayScore = localStorage.getItem("score");
var arrayName = localStorage.getItem("name");

//Splitting the name 
var trial = localStorage.getItem("name");
var arrayName = trial.split(',');

//Parsing the score
var newArrayScore = JSON.parse("[" + arrayScore + "]");

//Logic to add new line to add new name and score
for(var i=0;i<newArrayScore.length;i++){
    var index = i+1;
    var s1 = document.createElement('p')
    s1.textContent =  index + ". " +arrayName[i]+ ": " +newArrayScore[i];
    newEl.appendChild(s1)
}

//Logic to go back to welco
function BackToHomePage(){
    window.location.replace("index.html");
}

//Logic to clear local storage
function clearLS(){
    localStorage.clear();
    newEl.remove();
}

backBtn.addEventListener("click", BackToHomePage)
clearBtn.addEventListener("click", clearLS)