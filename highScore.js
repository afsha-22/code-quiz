var name1El = document.querySelector(".name1")
var score1El = document.querySelector(".score1")
var divEl = document.querySelector(".high-score-page")
var h1El = document.querySelector("h1")

// var n1 = document.createElement('p')
// divEl.appendChild(n1)

var arrayScore = localStorage.getItem("score");
var arrayName = localStorage.getItem("name");

var newArrayScore = JSON.parse("[" + arrayScore + "]");
// var newArrayName = JSON.parse("[" + arrayName + "]");

console.log(newArrayScore);
// console.log(newArrayName);


for(var i=0;i<newArrayScore.length;i++){
    var index = i+1;
    var s1 = document.createElement('p')
    // s1.textContent =  index + ". " +newArrayName[i]+ ": " +newArrayScore[i];
    s1.textContent =  index + ". Fake Name: " +newArrayScore[i];
    divEl.appendChild(s1)
}


// name1El.textContent = localStorage.getItem("name")
// score1El.textContent = localStorage.getItem("score")