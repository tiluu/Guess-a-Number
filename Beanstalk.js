
var answer=true
function game(){
	var guess = prompt('Guess a number between 1 - 10');

	var number = Math.floor((Math.random()*10)+1);
	while(true){
		if (guess > number){
			guess=prompt('Too high! Guess again')
		
	}
		else if (guess < number) {
			guess=prompt('Too low! Guess again')
	}
		else {
			answer=confirm('Correct! Play again?');
			break;
			
		
		
	}
	
}}




while(answer !=false){
	game();
}

