/*
 * This file is solely for testing various other functions and classes. This code should NOT ever be called by any other file!
 * NOTE README: If a function from here is actually useful for the main codebase, it should be REWRITTEN AND ADJUSTED IN some other file!!!
 */
const helpers = require('./utils/helpers.js');
const handEval = require('./utils/hand_eval.js');
const deck = require('./models/deck');


/*
 * Generate an array of random playerIDs.
 * @param numIDs is an integer determining how many playerIDs should be generated.
 * returns playerIDs: an array containing the specified number of playerIDs.
 */
function generateIDs(numIDs) {
  const playerIDs = [];

  for (let i = 0; i < numIDs; i++) {
    playerIDs.push(helpers.randomID());
  }

  return playerIDs;
}

/*
 * Give cards to each player
 * @param playerIDs is an array of strings for each player's ID.
 * returns an array containing two items:
 *  playerCards: a dictionary relating each playerID to an array of two cards (strings)
 *  boardCards: an array of five cards (strings)
 */
function dealAFullHand(playerIDs, currentDeck) {
  // Give each player 2 cards
  const allPlayersCards = {};
  for (let i = 0; i < numPlayers; i++) {
    const currentPlayersCards = [];
    for (let j = 0; j < 2; j++) { // 2 hole cards per player
      currentPlayersCards[j] = currentDeck.dealCard();
    }
    allPlayersCards[playerIDs[i]] = currentPlayersCards;
  }
  // Give the board 5 cards
  const boardCards = [];
  for (let i = 0; i < 5; i++) { // 5 board cards total
    boardCards[i] = currentDeck.dealCard();
  }

  return [allPlayersCards, boardCards];
}


/* *************************** TESTING BELOW HERE ************************** */

const numPlayers = Math.floor(Math.random() * 3) + 4; // for this test, create 4 to 6 total players
const players = generateIDs(numPlayers);

const Deck = deck.Deck;
const currentDeck = new Deck();

const handInfo = dealAFullHand(players, currentDeck);
const playersCards = handInfo[0];
const boardCards = handInfo[1];

console.log('\n~~~ The players and their cards: ~~~');
console.log(playersCards);
console.log('\n >>>>>>>>>> THE BOARD: ' + boardCards + '<<<<<<<<<<');

const handsEvaluated = handEval.rankPlayers(boardCards, playersCards);
const playersBestToWorst = handsEvaluated[0];
const playersHandInfo = handsEvaluated[1];

console.log('\n ~~~ The players, ranked from best to worst: ~~~');
for (let i = 0; i < numPlayers; i++) {
  const playerID = playersBestToWorst[i];
  const playerHand = playersHandInfo[playersBestToWorst[i]];
  console.log('Player ' + playerID.slice(3, 11) + ' has ' + playersCards[playerID] + '; best 5 are ' + playerHand.cards + ' which is ' + playerHand.type);
}
console.log('\nPlayer ' + playersBestToWorst[0] + ' wins the hand!\n\n');
