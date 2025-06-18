var randomNumber1;
var randomNumber2;
var dice1 = document.getElementById("dice1");
var dice2 = document.getElementById("dice2");
var result1 = undefined;
var result2 = undefined;

function rollDice1() {
    var count = 0;
    const interval = setInterval(function() {
        count++;        
        randomNumber1 = rng();
        document.getElementById("dice1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
        if (count > 60) {
            clearInterval(interval);
            result1 = randomNumber1;
            if (result2 != undefined) {
                win();
            }
        }
    }, 50);
}

function rollDice2() {
    var count = 0;
    const interval = setInterval(function() {
        count++;
        randomNumber2 = rng();
        document.getElementById("dice2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
        if (count > 60) {
            clearInterval(interval);
            result2 = randomNumber2;
            if (result1 != undefined) {
                win();
            }
        }
    }, 50);
}

function rng(){
    return Math.floor(Math.random() * 6) + 1;
}

function win() {
    if (result1 != undefined && result2 != undefined) {
        if (result1 > result2) {
            document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
            result1 = undefined;
            result2 = undefined;
        } else if (result1 < result2) {
            document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
            result1 = undefined;
            result2 = undefined;
        } else {
            document.querySelector("h1").innerHTML = "Draw!";
            result1 = undefined;
            result2 = undefined;
        }
    }
}

dice1.onclick = rollDice1;
dice2.onclick = rollDice2;