var clearBtn = document.querySelector(".clear")
var newEl = document.querySelector(".new-element")
var backBtn = document.querySelector(".back")

//Getting data from local storage
var arrayScore = localStorage.getItem("score");
var arrayName = localStorage.getItem("name");

//Splitting the name 
var nameString = localStorage.getItem("name");
if(nameString != null){
    var arrayName = nameString.split(',');
}

//Parsing the score
var newArrayScore = JSON.parse("[" + arrayScore + "]");

//Logic to add new line to add new name and score
if(nameString != null){
for(var i=0;i<newArrayScore.length;i++){
    var index = i+1;
    var s1 = document.createElement('p')
    s1.textContent =  index + ". " +arrayName[i]+ ": " +newArrayScore[i];
    if((index % 2 !== 0)){
        s1.style.backgroundColor="#fce9ae";
    }
    newEl.appendChild(s1)
    newEl.style.border ="5px solid #fce9ae";
}
}

//Logic to go back to welcome Page
function BackToHomePage(){
    console.log("button clicked")
    window.location.replace("index.html");
}

//Logic to clear local storage
function clearLS(){
    localStorage.clear();
    newEl.remove();
}

backBtn.addEventListener("click", BackToHomePage)
clearBtn.addEventListener("click", clearLS)