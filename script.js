let choice = ["rock", "paper" , "scissors"];

function getComputerChoice(){
    return choice[(Math.floor(Math.random() *choice.length))];
}

getComputerChoice();

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "The game is tie";
    }
    else if(playerSelection === "rock" && computerSelection === "paper"){
        return "you loose paper beats rock";
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        return "you win paper beats rock";
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        return "you win scissors beats paper";
    }
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        return "you loose scissors beats paper";
    }
    else if(playerSelection === "rock" && computerSelection === "scissors"){
        return "you win rock beats scissors";
    }
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        return "you loose rock beats scissors";
    }
}

playerSelection = "scissors";
computerSelection = getComputerChoice().toLowerCase();
console.log(playRound(playerSelection, computerSelection));