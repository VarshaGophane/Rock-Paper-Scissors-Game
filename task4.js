var choices=["paper", "rock", "scissors"];
var i=Math.floor(Math.random() * 3);
var CompChoice=choices[i];
var UserPoints=0;
var CompPoints=0;
function score(){
	var score_div=document.getElementById("scoreboard").innerHTML=UserPoints + " - " + CompPoints;
}

function convert(word){
	if(word === "paper") return '<i class="far fa-hand-paper"></i>';
	else if(word === "rock") return '<i class="far fa-hand-rock"></i>';
	else return'<i class="far fa-hand-scissors"></i>'
}
function game(UserChoice){
	var box=document.getElementById("result");
	box.style.display="inline-flex";
	var userDiv=document.getElementById("user-result");
	userDiv.innerHTML=convert(UserChoice);
	var comDiv=document.getElementById("comp-result");
	comDiv.innerHTML=convert(CompChoice);
	if(UserChoice === "paper" && CompChoice === "rock" || UserChoice === "rock" && CompChoice === "scissors" || UserChoice === "scissors" && CompChoice === "paper"){
		UserPoints++;
		score();
    	document.getElementById("who").innerHTML = "You win";
    	}
	else if(UserChoice === CompChoice){
		document.getElementById("who").innerHTML = "It's a Draw";
		}
	else{
		
		CompPoints++;
		score();
		document.getElementById("who").innerHTML = "You lose";
		}
	function continuGame(){
		i=Math.floor(Math.random() * 3);
		CompChoice=choices[i];
	}setTimeout(continuGame, 500);
	
}
