let playerScore = 0 ;
let computerScore = 0;

function getComputerChoice(){
    let choice = ["rock", "paper" , "scissors"];
    return choice[(Math.floor(Math.random() *choice.length))];
}
 
getComputerChoice();

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "The game is tie";
    }
    else if(playerSelection === "rock" && computerSelection === "paper"){
        computerScore++;
        return "you loose paper beats rock";       
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        playerScore++;
        return "you win paper beats rock"; 
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++;
        return "you win scissors beats paper";
    }
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        computerScore++;
        return "you loose scissors beats paper";
    }
    else if(playerSelection === "rock" && computerSelection === "scissors"){
        playerScore++;
        return "you win rock beats scissors"; 
    }
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        computerScore++;
        return "you loose rock beats scissors"; 
    }
}

function game(){
    let a = 0;

    while(a<5){
        playerSelection = window.prompt("Enter your choice : ").toLowerCase();
        computerSelection = getComputerChoice().toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
        a++;
    }
    if(playerScore>computerScore){
        console.log("Player Wins");
    }
    else if(computerScore>playerScore){
        console.log("Computer Wins");
    }
    else{
        console.log("Game Ties");
    }
}

game();