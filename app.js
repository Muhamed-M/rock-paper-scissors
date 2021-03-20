function openRules(){
	let modal = document.querySelector(".overlay");
	if (modal.style.display === "block"){
		modal.style.display = "none";
	} else {
		modal.style.display = "block";
	}
	window.onclick = (n) => {
        if (n.target == modal) {
            modal.style.display = "none";
        }
    }
}

let score = 0;
let triangle = document.getElementById("triangle");
let gameContainer = document.querySelector(".game-container");
let battleContainer = document.querySelector(".battle-container");
let score_span = document.getElementById("score");
let p = document.querySelector(".p");
let r = document.querySelector(".r");
let s = document.querySelector(".s");
let p_2 = document.querySelector(".p-2");
let r_2 = document.querySelector(".r-2");
let s_2 = document.querySelector(".s-2");
let p_3 = document.querySelector(".p-3");
let r_3 = document.querySelector(".r-3");
let s_3 = document.querySelector(".s-3");
let gameOver_div = document.querySelector(".game-over");
let stateMess = document.getElementById("state-message");
let playAgain_span = document.querySelector(".play-again");

let randomPick = Math.floor(Math.random() * 3);

function housePicks_comparision(){
	const comparision = ["p_3", "r_3", "s_3"];
	return comparision[randomPick];
}

function housePicks_show(){
	const choices = [p_3, r_3, s_3];
	choices[randomPick].style.display = "block";
}

function battle(userChoice, comparision){
	if (gameContainer.style.display = "block"){
		gameContainer.style.display = "none";
		triangle.style.display = "none";
		battleContainer.style.display = "flex";
		userChoice.style.display = "block";
	}
	const housePick = housePicks_comparision();
	switch (comparision + housePick){ 
		case "p_2r_3":
		case "r_2s_3":
		case "s_2p_3":
			setTimeout(() => {
				gameOver("YOU WIN", 1); //Display a message and raise score if state is win
			}, 1000);
			break;
		case "r_2p_3":
		case "s_2r_3":
		case "p_2s_3":
			setTimeout(() => {
				gameOver("YOU LOSE", -1); //Display a message and lower score if state is lost
			}, 1000);
			break;
		case "p_2p_3":
		case "r_2r_3":
		case "s_2s_3":
			setTimeout(() => {
				gameOver("DRAW", 0); //Display a message if state is draw
			}, 1000);
			break;
	}
}

function gameOver(state, scoreState){
	gameOver_div.style.display = "block";
	stateMess.innerHTML = state;
	score += scoreState;
	score_span.innerHTML = score;
}

function playAgain(){
	location.reload();
	battleContainer.style.display = "none";
	triangle.style.display = "block";
	gameContainer.style.display = "block";
	gameOver_div.style.display = "none";
	stateMess.innerHTML = "";
}

p.addEventListener("click", () => {
	battle(p_2, "p_2");
	setTimeout(housePicks_show, 1000);
});
r.addEventListener("click", () => {
	battle(r_2, "r_2");
	setTimeout(housePicks_show, 1000);
});
s.addEventListener("click", () => {
	battle(s_2, "s_2");
	setTimeout(housePicks_show, 1000);
});

playAgain_span.addEventListener("click", playAgain);