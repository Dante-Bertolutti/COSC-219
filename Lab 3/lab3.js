var computerChoice = getRandom(1,3);
const rock = 1;
const paper = 2;
const scissors = 3;
var playerWins = 0;
var computerWins = 0;


var realuserinput = getUserInput();
playgame()
function playgame() {
if(realuserinput === "paper"){
    if(computerChoice == 1){
        console.log("You Win");
        playerWins++;
        console.log("Computer Wins: " + computerWins + "" + "Player Wins: " + playerWins);
    }
    if(computerChoice == 2){
        console.log("Tie!")
    }
    if(computerChoice == 3){
        console.log("You Lose");
        computerWins++;
        console.log("Computer Wins: " + computerWins + "" + "Player Wins: " + playerWins);
    }
}
if(realuserinput === "rock"){
    if(computerChoice == 3){
        console.log("You Win");
        playerWins++;
        console.log("Computer Wins: " + computerWins + "" + "Player Wins: " + playerWins);
    }
    if(computerChoice == 1){
        console.log("Tie!")
    }
    if(computerChoice == 2){
        console.log("You Lose");
        computerWins++;
        console.log("Computer Wins: " + computerWins + "" + "Player Wins: " + playerWins);
    }
}
if(realuserinput === "scissors"){
    if(computerChoice == 2){
        console.log("You Win");
        playerWins++;
        console.log("Computer Wins: " + computerWins + "" + "Player Wins: " + playerWins);
    }
    if(computerChoice == 3){
        console.log("Tie!")
    }
    if(computerChoice == 1){
        console.log("You Lose");
        computerWins++;
        console.log("Computer Wins: " + computerWins + "" + "Player Wins: " + playerWins);
    }
}
}

function getUserInput(){
    var userInput = prompt("Welcome to rock paper scissors. Please type an option: ");
    return userInput.toLowerCase();
}

function getRandom(min,max){
    const minCeiling = Math.ceil(min)
    const maxCeiling = Math.floor(max);
    return Math.floor(Math.random()* (maxCeiling - minCeiling + 1) + minCeiling);
}