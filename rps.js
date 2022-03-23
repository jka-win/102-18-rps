
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

function playRound(player1, player2) {
    let hand1 = player1.getHand();
    let hand2 = player2.getHand();
    let winner = null;
    if (hands.indexOf(hand1) == (hands.indexOf(hand2) + 1) % 3)
        winner = player1;
    else if (hand1 != hand2)
        winner = player2;

    console.log(`${hand1}! ${hand2}!`);
    if (winner)
        console.log(`${winner.name} wins the round!`);
    else
        console.log("It's a tie...");
    return winner;
}

function playGame(player1, player2, playUntil) {
    console.log(`${player1.name} -vs- ${player2.name}`);
    console.log(`Playing to ${playUntil}!`);
    console.log();
    
    let wins1 = 0;
    let wins2 = 0;
    while (wins1 < playUntil && wins2 < playUntil) {
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

function playTournament(player1, player2, player3, player4, playUntil) {
    let winner1 = playGame(player1, player2, playUntil);
    console.log(`${winner1.name} wins the game!`);
    console.log();
    console.log("-".repeat(50));
    console.log();
    
    let winner2 = playGame(player3, player4, playUntil);
    console.log(`${winner2.name} wins the game!`);
    console.log();
    console.log("-".repeat(50));
    console.log();

    let worldChamp = playGame(winner1, winner2, playUntil);
    console.log(`${worldChamp.name} wins the game!`);
    console.log();
    console.log("-".repeat(50));
    console.log();

    return worldChamp;
}

let player1 = player("Joseph");
let player2 = player("Scott Oelkers");
let player3 = player("A literal rock");
let player4 = player("Collective Unconsciousness");
let playUntil = 5;

let worldChamp = playTournament(player1, player2, player3, player4, playUntil);
console.log(`${worldChamp.name} is the world champion!`);
