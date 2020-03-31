// PRE FUNCTIONS


const printMessage = function(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

const clearMessages = function(){
	document.getElementById('messages').innerHTML = '';
}

// THE GAME

const playGame = function(playerMove){

  clearMessages();

	const getMoveName = function(argMoveId){
    if(argMoveId == 1) return 'kamień';
    if(argMoveId == 2) return 'papier';
    if(argMoveId == 3) return 'nożyce';
  }

  const displayResult = function(argComputerMove, argPlayerMove){

		if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      return 'Wygrywasz';
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      return 'Wygrywasz';
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      return 'Wygrywasz';
    } else if (argComputerMove == argPlayerMove){
      return 'Remis';
    } else {
      return 'Przegrywasz';
    }

}

  const randomNumber = Math.floor(Math.random() * 3 + 1),
 				computerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + computerMove);
  printMessage('Twój ruch to: ' + playerMove);

  printMessage(displayResult(computerMove, playerMove));
  
}

document.getElementById('button-rock').addEventListener('click', function() {
		playGame('kamień');
});

document.getElementById('button-paper').addEventListener('click', function() {
		playGame('papier');
});

document.getElementById('button-scissors').addEventListener('click', function() {
		playGame('nożyce');
});





