const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.querySelector('.res');
const finalResult = document.querySelector('#final_result');
let playerScore = 0 ;
let computerScore = 0;
let totalGames = 0;

function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"];
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
        
         // playerSelection = window.prompt("Enter your choice : ").toLowerCase();
        rock.addEventListener('click' , function(){
            playerSelection = 'rock';
            computerSelection = getComputerChoice().toLowerCase();
            result.innerText =  playRound(playerSelection, computerSelection);
            totalGames ++;
        if(totalGames === 5){
            finalRes();
        }
        });
        paper.addEventListener('click' , function(){
            playerSelection = 'paper';
            computerSelection = getComputerChoice().toLowerCase();
            result.innerText = playRound(playerSelection, computerSelection);
            totalGames ++;
        if(totalGames === 5){
            finalRes();
        }
        });
        scissors.addEventListener('click' , function(){
            playerSelection = 'scissors';
            computerSelection = getComputerChoice().toLowerCase();
            result.innerText = playRound(playerSelection, computerSelection);
            totalGames ++;
        if(totalGames === 5){
            finalRes();
        }
        });
        
}
game();
    
function finalRes(){
    if(playerScore>computerScore){
        finalResult.innerText = "Player Wins";
    }
    else if(computerScore>playerScore){
        finalResult.innerText = "Computer Wins";
    }
    else{
      finalResult.innerText = "Game Ties";
    }
}

//finalRes();