
function getComputerChoice(){
    let choice = "";
    switch (Math.floor(Math.random() * 3)){
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }
    return choice;
}

function getHumanChoice(){
    let choice = "";
    choice = prompt("Choose Rock, Paper, or Scissors.").toLowerCase();
    while (!(choice === "rock" || choice === "paper" || choice === "scissors")){
        choice = prompt("Invalid entry! You may only choose Rock, Paper, or Scissors.").toLowerCase();
    }
    return choice;
}

function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    function playRound(){
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();
        if (humanSelection === "rock" && computerSelection === "scissors"){
            console.log("You win! Rock beats scissors!");
            humanScore++
        }
        else if (humanSelection === "rock" && computerSelection === "paper"){
            console.log("You lose! Paper beats rock!");
            computerScore++
        }
        else if (humanSelection === "paper" && computerSelection === "rock"){
            console.log("You win! Paper beats rock!");
            humanScore++
        }
        else if (humanSelection === "paper" && computerSelection === "scissors"){
            console.log("You lose! Scissors beat paper!");
            computerScore++
        }
        else if (humanSelection === "scissors" && computerSelection === "paper"){
            console.log("You win! Scissors beat paper!");
            humanScore++
        }
        else if (humanSelection === "scissors" && computerSelection === "rock"){
            console.log("You lose! Rock beats scissors!");
            computerScore++
        }

        else if (humanSelection === computerSelection){
            console.log("You both chose " + humanSelection + ". This is a draw!")
        }
    }

    function displayWinner(){
        console.log("Let's tally the results... the computer's score is " + computerScore + " and your score is " + humanScore + ".");
        let winner = "";
        if (humanScore < computerScore){
            console.log("The computer beat you. Better luck next time!")
        }
        else if (humanScore === computerScore){
            console.log("Looks like it's a draw!")
        }
        else {
            console.log("You won the game! Congratulations!");
        }
    }

    console.log("Welcome to Rock, Paper, Scissors! The game is played over 5 rounds.")
    for (let i = 1; i <= 5; i++){
        console.log("Round " + i + "!")
        playRound();
    }
    displayWinner();

}

playGame();