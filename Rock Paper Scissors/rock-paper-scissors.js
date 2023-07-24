let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

function playGame(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'Tie';
    }
    if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || (playerSelection === 'Paper' && computerSelection === 'Rock') || (playerSelection === 'Scissors' && computerSelection === 'Paper')){
        playerScore++;
        roundWinner = 'player';
    }
    if ((playerSelection === 'Rock' && computerSelection === 'Paper') || (playerSelection === 'Paper' && computerSelection === 'Scissors') || (playerSelection === 'Scissors' && computerSelection === 'Rock')){
        computerScore++;
        roundWinner = 'computer';
    }
        
    
}
function computerChoice() {
    
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0:
            return 'Rock';
            
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }    
}
function isGameOver(){
    return playerScore === 5 || computerScore === 5;
}

const scoreInfo = document.getElementById('score-info');
const moveInfo = document.getElementById('move-info');
const playerSign = document.getElementById('player-sign');
const compterSign = document.getElementById('computer-sign');
const playerScoreGame = document.getElementById('playerScore');
const computerScoreGame = document.getElementById('computerScore');
const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn')

rockBtn.addEventListener('click', () => handleClick('Rock'))
paperBtn.addEventListener('click', () => handleClick('Paper'))
scissorsBtn.addEventListener('click', () => handleClick('Scissors'))
restartBtn.addEventListener('click', restartGame)
overlay.addEventListener('click', closeEndgameModal)

function handleClick(playerSelection) {
  if (isGameOver()) {
    openEndgameModal()
    return
  }

  const computerSelection = computerChoice()
  playGame(playerSelection, computerSelection)
  updateChoices(playerSelection, computerSelection)
  updateScore()

  if (isGameOver()) {
    openEndgameModal()
    setFinalMessage()
  }
}


function updateChoices(playerSelection,computerSelection){
    switch (playerSelection){
        case 'Rock':
            playerSign.textContent = '✊';
            break;
        case 'Paper':
            playerSign.textContent = '✋';
            break;
        case 'Scissors':
            playerSign.textContent = '✌';
            break;

    }
    switch (computerSelection){
        case 'Rock':
            compterSign.textContent = '✊';
            break;
        case 'Paper':
            compterSign.textContent = '✋';
            break;
        case 'Scissors':
            compterSign.textContent = '✌';
            break;
            
    }
}
function updateScore(){
    if(roundWinner === 'Tie'){
        scoreInfo.textContent = `It's a Tie!`;
    }
    else if(roundWinner === 'player'){
        scoreInfo.textContent = `You won!`;
    }
    else if(roundWinner === 'computer'){
        scoreInfo.textContent = `You lost!`;
    }
    playerScoreGame.textContent = `Player: ${playerScore}`;
    computerScoreGame.textContent = `Computer: ${computerScore}`;
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
    if (winner === 'player') {
      scoreMessage.textContent = `${capitalizeFirstLetter(
        playerSelection
      )} beats ${computerSelection.toLowerCase()}`
      return
    }
    if (winner === 'computer') {
      scoreMessage.textContent = `${capitalizeFirstLetter(
        playerSelection
      )} is beaten by ${computerSelection.toLowerCase()}`
      return
    }
  
    scoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} ties with ${computerSelection.toLowerCase()}`
  }
  function openEndgameModal() {
    endgameModal.classList.add('active')
    overlay.classList.add('active')
  }
  
  function closeEndgameModal() {
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
  }
  
  function setFinalMessage() {
    return playerScore > computerScore
      ? (endgameMsg.textContent = 'You won!')
      : (endgameMsg.textContent = 'You lost...')
  }
  
  function restartGame() {
    playerScore = 0
    computerScore = 0
    scoreInfo.textContent = 'Choose your weapon'
    moveInfo.textContent = 'First to score 5 points wins the game'
    playerScoreGame.textContent = 'Player: 0'
    computerScoreGame.textContent = 'Computer: 0'
    playerSign.textContent = '❔'
    compterSign.textContent = '❔'
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
  }


