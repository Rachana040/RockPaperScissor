var op = ['rock','paper','scissor']
function check(user_op) {
	var user_choice = ""+user_op.id;
	var comp_choice = ""+ op[Math.floor(Math.random()*3)];
	document.getElementById("comp_op").innerHTML = "Computer Choose "+ comp_choice;
	if(user_choice === comp_choice) {
		document.getElementById("ans").innerHTML = "Tie.";
	}
	
	else if( (user_choice === "rock" && comp_choice ==="paper") || (user_choice === "paper" && comp_choice === "scissor") || (user_choice ==="scissor" && comp_choice === "rock" )) {
			document.getElementById("ans").innerHTML = "Computer Wins.";
	}
	
	else {
		document.getElementById("ans").innerHTML = "You Win.";
	}
}