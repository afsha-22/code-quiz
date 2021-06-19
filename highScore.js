var name1El = document.querySelector(".name1")
var score1El = document.querySelector(".score1")
var divEl = document.querySelector(".high-score-page")
var h1El = document.querySelector("h1")
var clearBtn = document.querySelector(".clear")
var newEl = document.querySelector(".new-element")

var arrayScore = localStorage.getItem("score");
var arrayName = localStorage.getItem("name");
console.log(arrayName)

var trial = localStorage.getItem("name");
    var arrayName = trial.split(',');
    console.log(arrayName[0])

var newArrayScore = JSON.parse("[" + arrayScore + "]");
// var newArrayName1 = JSON.spilt(arrayName);
// var newArrayName = JSON.parse("[" + arrayName + "]");
// console.log(newArrayName)

console.log(newArrayScore);
// console.log(newArrayName);


for(var i=0;i<newArrayScore.length;i++){
    var index = i+1;
    var s1 = document.createElement('p')
    // s1.textContent =  index + ". " +newArrayName[i]+ ": " +newArrayScore[i];
    s1.textContent =  index + ". " +arrayName[i]+ ": " +newArrayScore[i];
    // s1.textContent =  index + ". Fake Name: " +newArrayScore[i];
    newEl.appendChild(s1)
}

function clearLS(){
    localStorage.clear();
    newEl.remove();
}

// name1El.textContent = localStorage.getItem("name")
// score1El.textContent = localStorage.getItem("score")
clearBtn.addEventListener("click", clearLS)