// TIMERS

// setTimeout
// setInterval

// Click Race
var playerScore = 0;
var cpuScore = 0;
var cpuWait = 1000;
var maxScore = 100;
var intervalId;

$(".jumbotron").on("click", function () {
    var rand = Math.random();
    var negValue = 1;

    if (rand > .5) {
        negValue = -1;
    } else {
        negValue = 1;
    }
    playerScore = playerScore + (negValue * (Math.round(Math.random() * 20 + 1)));
    $("#playerScore").text(playerScore);
    checkGameStatus();
});

intervalId = setInterval(function () {
    cpuScore = cpuScore + (Math.round(Math.random() * 20 + 1));
    $("#cpuScore").text(cpuScore);
    checkGameStatus();
}, cpuWait);

function checkGameStatus() {
    if (playerScore >= 100) {
        alert("Player Wins!");
        clearInterval(intervalId);
        resetGame();
    } else if (cpuScore >= 100) {
        alert("CPU Wins");
        clearInterval(intervalId);
        resetGame();
    }
}

function reset() {
    cpuScore = 0;
    playerScore = 0;
    $("#cpuScore").text(cpuScore);
    $("#playerScore").text(playerScore);
}