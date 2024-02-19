let choices = ["Rock","Paper","Scissors"];
let playerPoints = 0;
let computerPoints = 0;
function getComputerChoice() {
    selected = Math.floor(Math.random()*choices.length);
    computerMove = choices[selected];
    return computerMove.toLowerCase(); 
}
function gameRound(playerSelection, computerSelection){
    playerWins = playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock";
    computerWins = computerSelection === "rock" && playerSelection === "scissors" || computerSelection === "scissors" && playerSelection === "paper" || computerSelection === "paper" && playerSelection === "rock";
    
    if (playerWins){
        console.log(`You Win the round! ${playerSelection} beats ${computerSelection}.`);
        playerPoints++;
    } else if (computerWins){
        console.log(`You Lose the round! ${computerSelection} beats ${playerSelection}.`);
        computerPoints++;
    } else {
        console.log(`This round is a tie, ${playerSelection} draws ${computerSelection}`);
    }
}
function playGame(){
    
    console.log(`player Points : ${playerPoints}, Computer Points : ${computerPoints}`);
    for(let i=1;i<=5;i++){
        console.log(`Round ${i}`);
        let playerSelection = prompt("Make your choice young Padowan! Enter Rock, Paper or Scissors", "").toLowerCase();
        let computerSelection = getComputerChoice();
        gameRound(playerSelection, computerSelection);
        console.log(`player Points : ${playerPoints}, Computer Points : ${computerPoints}`);
    }
    if (playerPoints > computerPoints){
        return "Congrats! You Won the Game.";
    } else if (computerPoints > playerPoints){
        return "Alas! You Lost the Game."
    } else {
        return "The Game is a Tie.";
    }
}

console.log(playGame());