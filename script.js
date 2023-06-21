'use strict';

const dice = document.querySelector(".dice");
const score1 = document.querySelectorAll(".score")[0];
const score2 = document.querySelectorAll(".score")[1];
const newButton = document.querySelector(".btn.btn--new");
const rollButton = document.querySelector(".btn.btn--roll");
const holdButton = document.querySelector(".btn.btn--hold");
const player = document.querySelectorAll(".player");
let playerActiveScore = document.getElementById("score--0");
let playerActiveCurrent = document.getElementById("current--0");

let currentPlayer = player[0];
let currentPlayerName = document.getElementById("name--0");

dice.classList.add("hidden");
score1.textContent = "0";
score2.textContent = "0";


const generateRandom = (random) => {
    dice.src = `dice-${random}.png`
    if (dice.classList.contains("hidden"))
        dice.classList.remove("hidden");

}
let count = 0;
const playerToggle = () => {
    currentPlayer.classList.remove("player--active");
    count++;
    playerActiveScore = document.getElementById(`score--${count % 2}`);
    playerActiveCurrent = document.getElementById(`current--${count % 2}`);
    currentPlayer = player[count % 2];
    currentPlayer.classList.add("player--active");
    currentPlayerName = document.getElementById(`name--${count % 2}`);


}
const addToScore = (number) => {
    if (number !== 1) {
        playerActiveScore.textContent = Number(playerActiveScore.textContent) + number;
    }
    else {
        playerActiveScore.textContent = 0;
        playerToggle();

    }

}

const addToCurrent = () => {
    playerActiveCurrent.textContent = Number(playerActiveCurrent.textContent) + Number(playerActiveScore.textContent);

}

rollButton.addEventListener("click", function () {
    let random = Math.floor(Math.random() * 6) + 1;
    generateRandom(random);
    addToScore(random);
});


holdButton.addEventListener("click", function () {
    addToCurrent();
    playerActiveScore.textContent = 0;
    if (Number(playerActiveCurrent.textContent) >= 100) {
        currentPlayer.style.backgroundColor = "green";
        currentPlayerName.textContent = "player " + (count + 1) + " win ! ";
    }
    dice.classList.add("hidden");
    playerToggle();
});

