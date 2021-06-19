var name1El = document.querySelector(".name1")
var score1El = document.querySelector(".score1")
var divEl = document.querySelector(".high-score-page")
var h1El = document.querySelector("h1")

// var n1 = document.createElement('p')
// divEl.appendChild(n1)

var s1 = document.createElement('p')
s1.textContent = "1. " +localStorage.getItem("name")+ ": " +localStorage.getItem("score")
divEl.appendChild(s1)

// name1El.textContent = localStorage.getItem("name")
// score1El.textContent = localStorage.getItem("score")