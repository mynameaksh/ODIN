let player = document.getElementById("player-move");
let computer = document.getElementById("computer-move");
let score = document.querySelector(".nums");
let head = document.querySelector(".head")
let round = 1;
let allMove = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;


// generating a function when a key is pressed it starts the round 1 and then moves to next round when again pressed
document.addEventListener("keydown", () => {
    head.innerHTML = `Round:${round} Press again for next round`
    round++;

    //calling the function which executes the game  
    playRound(getHumanChoice, getComputerChoice);


    // updating the score and round based on the returns 
    player.innerText = humanScore;
    computer.innerText = computerScore;
    score.innerText = `${humanScore}-${computerScore}`
})




// getting the move of computer 
function getComputerChoice() {
    let idx = Math.floor(Math.random() * 3);
    let move = allMove[idx];
    return move;
}


// getting the input from the user and making it case insensitive .
function getHumanChoice() {
    let playerMove = prompt("enter ROCK PAPER SCISSORS");
    return playerMove ? playerMove.toLowerCase() : '';

}


// generating a function which decides who wins the round. & an updates the score based on that
function playRound(humanChoice, computerChoice) {

    let a = humanChoice();
    let b = computerChoice();

    if (a === "rock" && b === "paper") {
        console.log("Computer Wins");
        computerScore++;
    }
    else if (a === "rock" && b === "scissors") {
        console.log("PLayer WIns!");
        humanScore++;

    }
    else if (a === "paper" && b === "rock") {
        console.log("player Wins!");
        humanScore++;
    }
    else if (a === "paper" && b == "scissors") {
        console.log("computer WINs!");
        computerScore++;
    }
    else if (a === "scissors" && b === "paper") {
        console.log("player WINs!");
        humanScore++;
    }
    else if (a === "scissors" && b === "rock") {
        console.log("computer wins!");
        computerScore++;

    }
    else {
        console.log("its a Tie!");

    }

    return computerScore, humanScore;



}







