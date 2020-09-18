const gameTitle = document.getElementById("title");
let player1Score = document.getElementById("score-first");
let player2Score = document.getElementById("score-second");
let player1DiceScore = document.getElementById("dice-score-first");
let player2DiceScore = document.getElementById("dice-score-second");
const diceRollBtn = document.getElementById("roll-btn");
const diceResetBtn = document.getElementById("reset-btn");
let totalScore1 = 0;
let totalScore2 = 0;

// Rolling Dice Functionality
function rollDice(e){
    // Preventing Buttons Default Behaviour
    e.preventDefault()
    // Checking For Turn
    if(gameTitle.innerText === "Player 1 Turn"){
        // Random Number For Dice of Player 1
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        // Setting Player 1 Dice to Random Number
        player1DiceScore.innerText = randomNumber1;
        // Updating Player 1 Score With Dice Score
        totalScore1 += randomNumber1;
        // Displaying Player 1 Score
        player1Score.innerText = totalScore1;
        // Changing Turn To Player 2
        gameTitle.innerText = "Player 2 Turn";
    }else if(gameTitle.innerText === "Player 2 Turn"){
        // Random Number For Dice of Player 2
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;
        // Setting Player 2 Dice to Random Number
        player2DiceScore.innerText = randomNumber2;
        // Updating Player 2 Score With Dice Score
        totalScore2 += randomNumber2;
        // Displaying Player 2 Score
        player2Score.innerText = totalScore2;
        // Changing Turn To Player 1
        gameTitle.innerText = "Player 1 Turn";
    }

    declareResult() // Declaring Result For The Game
}diceRollBtn.addEventListener("click",rollDice) // Evenet Listener on Roll Button

// Declaring Result as Win if any player scores 30 or more
function declareResult(){
    if(totalScore1 >= 30){
        gameTitle.innerText = "🎉 Player 1 Won! 🎉";
        diceResetBtn.style.display = "inline-block";
        diceRollBtn.style.display = "none";
    }else if(totalScore2 >= 30){
        gameTitle.innerText = "🎉 Player 2 Won! 🎉";
        diceResetBtn.style.display = "inline-block";
        diceRollBtn.style.display = "none";
    }
}

// Reset Button
diceResetBtn.addEventListener("click",function(e){
    e.preventDefault();
    totalScore1 = 0;
    totalScore2 = 0;
    gameTitle.innerText = "Player 1 Turn";
    player1Score.innerText = 0;
    player2Score.innerText = 0;
    player1DiceScore.innerText = 0;
    player2DiceScore.innerText = 0;
    diceResetBtn.style.display = "none";
    diceRollBtn.style.display = "inline-block";
})