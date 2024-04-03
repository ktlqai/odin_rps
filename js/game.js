function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection == 'ROCK') {
        if (computerSelection == 'ROCK') {
            return 0;
        } else if (computerSelection == 'PAPER') {
            return 1;
        } else if (computerSelection == 'SCISSORS') {
            return -1;
        }
    } else if (playerSelection == 'PAPER') {
        if (computerSelection == 'ROCK') {
            return -1;
        } else if (computerSelection == 'PAPER') {
            return 0;
        } else if (computerSelection == 'SCISSORS') {
            return 1;
        }
    } else if (playerSelection == 'SCISSORS') {
        if (computerSelection == 'ROCK') {
            return 1;
        } else if (computerSelection == 'PAPER') {
            return -1;
        } else if (computerSelection == 'SCISSORS') {
            return 0;
        }
    }

    return undefined;
}

var round = 0;
var playerWins = 0;
var computerWins = 0;

const matches = document.querySelectorAll("#rock, #paper, #scissors");
matches.forEach((matchedButton) => {
    matchedButton.addEventListener("click", () => {
    round++;

    const playerSelection = matchedButton.innerHTML;
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    //console.log(`Round ${(i + 1)}: player: ${playerSelection}, computer: ${computerSelection}, result: ${result}`);

    const container = document.querySelector("#game_results");

    const content = document.createElement("div");
    //content.classList.add("content");
    content.textContent = `Round ${round}: player: ${playerSelection}, computer: ${computerSelection}, result: ${result}`;

    container.appendChild(content);

    if (result == -1) {
        playerWins++;

        if (playerWins == 5) {
            round = 0;
            playerWins = 0;
            computerWins = 0;

            const content2 = document.createElement("div");
            //content.classList.add("content");
            content2.textContent = `Player wins 5 points!`;

            container.appendChild(content2);
        }
    } else if (result == 1) {
        computerWins++;

        if (computerWins == 5) {
            round = 0;
            playerWins = 0;
            computerWins = 0;

            const content2 = document.createElement("div");
            //content.classList.add("content");
            content2.textContent = `Computer wins 5 points!`;

            container.appendChild(content2);
        }
    }
});
});

/*function getPlayerChoice() {
    let playerChoice = prompt('What is your choice?');
    return playerChoice.toUpperCase();
}*/

function getComputerChoice() {
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    return choices[Math.floor(Math.random() * choices.length)];
}