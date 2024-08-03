
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

function getHumanChoice(e){
    gameLog.textContent = "Choose Rock, Paper, or Scissors.";
    while (!(choice === "rock" || choice === "paper" || choice === "scissors")){
        choice = prompt("Invalid entry! You may only choose Rock, Paper, or Scissors.").toLowerCase();
    }
    return choice;
}

function playGame(){

    let humanScore = 0;
    let computerScore = 0;
    let rounds = 0;

    let body = document.querySelector("body");

    let gameDiv = document.createElement("div");
    gameDiv.style.cssText = "display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh;"
    body.appendChild(gameDiv);

    let buttonsDiv = document.createElement("div");
    buttonsDiv.style.padding = "10px";
    gameDiv.appendChild(buttonsDiv);

    let buttons = ["rock", "paper", "scissors"];    
    buttons.forEach((element) => {
        let button = document.createElement("button");
        button.textContent = element;
        button.style.margin = "5px";
        button.setAttribute("id", element);
        button.addEventListener("click", (e) => {
            playRound(e);
        });
        buttonsDiv.appendChild(button);
    });

    let gameLog = document.createElement("div");
    gameLog.textContent = "Choose well.";
    gameDiv.appendChild(gameLog)
 

    function playRound(e){
        rounds++;
        if (rounds === 5) {
            displayWinner();
        }
        else {
            let humanSelection = e.target.id;
            let computerSelection = getComputerChoice();
            if (humanSelection === "rock" && computerSelection === "scissors"){
                gameLog.textContent = "You win! Rock beats scissors!";
                humanScore++
            }
            else if (humanSelection === "rock" && computerSelection === "paper"){
                gameLog.textContent = "You lose! Paper beats rock!";
                computerScore++
            }
            else if (humanSelection === "paper" && computerSelection === "rock"){
                gameLog.textContent = "You win! Paper beats rock!";
                humanScore++
            }
            else if (humanSelection === "paper" && computerSelection === "scissors"){
                gameLog.textContent = "You lose! Scissors beat paper!";
                computerScore++
            }
            else if (humanSelection === "scissors" && computerSelection === "paper"){
                gameLog.textContent = "You win! Scissors beat paper!";
                humanScore++
            }
            else if (humanSelection === "scissors" && computerSelection === "rock"){
                gameLog.textContent = "You lose! Rock beats scissors!";
                computerScore++
            }

            else if (humanSelection === computerSelection){
                gameLog.textContent = "You both chose " + humanSelection + ". This is a draw!";
            }
            console.log("This is currently round " + rounds);
        }
    }

    function displayWinner(){
        gameLog.textContent = "Let's tally the results... the computer's score is " + computerScore + " and your score is " + humanScore + ".";
        let winner = "";
        if (humanScore < computerScore){
            gameLog.textContent = "The computer beat you. Better luck next time!";
        }
        else if (humanScore === computerScore){
            gameLog.textContent = "Looks like it's a draw!";
        }
        else {
            gameLog.textContent = "You won the game! Congratulations!";
        }
    }

}

playGame();