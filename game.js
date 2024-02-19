let choices = ["Rock","Paper","Scissors"];
function getComputerChoice() {
    selected = Math.floor(Math.random()*choices.length);
    computerMove = choices[selected];
    return computerMove.toLowerCase(); 
}
function gameRound(playerSelection, computerSelection){
    playerWins = playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock";
    computerWins = computerSelection === "rock" && playerSelection === "scissors" || computerSelection === "scissors" && playerSelection === "paper" || computerSelection === "paper" && playerSelection === "rock";
    
    if (playerWins){
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else if (computerWins){
        return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    } else {
        return `It's a Tie, ${playerSelection} draws ${computerSelection}`;
    }
}
let playerSelection = prompt("Make your choice young Padowan! Enter Rock, Paper or Scissors", "").toLowerCase();
let computerSelection = getComputerChoice();
console.log(gameRound(playerSelection, computerSelection));