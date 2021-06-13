startBtn = document.getElementById("start");
welcomeEl = document.querySelector(".first-page")
question1 = document.querySelector(".quest1")

function startQuiz(){

    if (welcomeEl){
        welcomeEl.style.display = 'none';
        question1.style.display = 'block'; 
    }
}

startBtn.addEventListener("click", startQuiz)
