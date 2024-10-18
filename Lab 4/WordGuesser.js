const words = ["who", "what", "when", "where", "why", "how"];
const guessedLetters = [];
const maxIncorrect = 10;
let correctGuessCount = 0;
let incorrectGuessCount = 0;

// Picks the word to guess from the words array
function randomWord(words) {
    const randomNum = Math.floor(Math.random() * words.length);
    return words[randomNum];
}

// The Word to Be Guessed
var guessWord = randomWord(words);

// Active word built out of guesses
let workingWord = Array(guessWord.length).fill('_');

function displayWord(guessLetter) {
    for (let i = 0; i < guessWord.length; i++) {
        if (guessWord.charAt(i) === guessLetter) {
            workingWord[i] = guessLetter;
        }
    }
    if (workingWord.join('') === guessWord) {
        console.log("You Win!");
    } 
    else if(incorrectGuessCount === maxIncorrect){
        console.log("You Lose :(")
    }
    else {
        console.log(workingWord.join(' '));
    }
}

function guessLetter(guessLetter) {
    if (guessWord.includes(guessLetter)) {
        correctGuessCount++;
        console.log("Good Guess!");
        displayWord(guessLetter);
        return true;
    } else {
        incorrectGuessCount++;
        console.log("Not Quite");
        displayWord(guessLetter);
        return false;
    }
}

function playGame() {
    console.log(guessWord);
    while (correctGuessCount < guessWord.length && incorrectGuessCount < maxIncorrect) {
        const guess = prompt("Enter a Letter").toLowerCase();
        guessLetter(guess);
    }
}

playGame();
