
const hands = ['Rock', 'Paper', 'Scissors'];
function getHand() {
    let index = Math.floor(Math.random() * 3);
    return hands[index];
}

function player(name) {
    return {
        name: name,
        getHand: () => getHand(),
    }
}

function printRoundWinner(hand1, hand2, winner) {
    console.log(`${hand1}! ${hand2}!`);
    if (winner)
        console.log(`${winner.name} wins the round!`);
    else
        console.log("It's a tie...");
}

function hand1Wins(hand1, hand2) {
    return hands.indexOf(hand1) == (hands.indexOf(hand2) + 1) % 3;
}

function pickWinner(player1, player2, hand1, hand2) {
    if (hand1Wins(hand1, hand2))
        return player1;
    else if (hand1 != hand2)
        return player2;
    else
        return null;
}

// pickWinner and printRoundWinner extracted from original function
function playRound(player1, player2) {
    let hand1 = player1.getHand();
    let hand2 = player2.getHand();
    let winner = pickWinner(player1, player2, hand1, hand2);
    printRoundWinner(hand1, hand2, winner);    
    return winner;
}

function printGameIntro(player1, player2, playUntil) {
    console.log(`${player1.name} -vs- ${player2.name}`);
    console.log(`Playing to ${playUntil}!`);
    console.log();
}

function gameFinished(wins1, wins2, playUntil) {
    return wins1 >= playUntil || wins2 >= playUntil;
}

function playGameRounds(player1, player2, playUntil) {
    let wins1 = 0;
    let wins2 = 0;
    while (!gameFinished(wins1, wins2, playUntil)) {
        let roundWinner = playRound(player1, player2);
        if (roundWinner == player1)
            wins1++;
        else if (roundWinner == player2)
            wins2++;
        console.log();
    }

    if (wins1 == playUntil)
        return player1;
    else
        return player2;
}

// printGameIntro and playGameRounds extracted from original function
function playGame(player1, player2, playUntil) {
    printGameIntro(player1, player2, playUntil);
    return playGameRounds(player1, player2, playUntil);
}

function printGameWinner(player) {
    console.log(`${player.name} wins the game!`);
    console.log();
    console.log("-".repeat(50));
    console.log();
}

function playTournamentGame(player1, player2, playUntil) {
    const winner = playGame(player1, player2, playUntil);
    printGameWinner(winner);
    return winner;
}

// playTournamentGame extracted from original function
function playTournament(player1, player2, player3, player4, playUntil) {
    let winner1 = playTournamentGame(player1, player2, playUntil);
    let winner2 = playTournamentGame(player3, player4, playUntil);
    let worldChamp = playTournamentGame(winner1, winner2, playUntil);
    return worldChamp;
}

let player1 = player("Joseph");
let player2 = player("Scott Oelkers");
let player3 = player("A literal rock");
let player4 = player("Collective Unconsciousness");
let playUntil = 5;

let worldChamp = playTournament(player1, player2, player3, player4, playUntil);
console.log(`${worldChamp.name} is the world champion!`);
