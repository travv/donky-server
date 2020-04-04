/*
 * This file is solely for testing various other functions and classes. This code should NOT ever be called by any other file!
 * If a function from here is actually useful for the main codebase, it should be COPIED TO OR REWRITTEN IN some other file!
 */
const helpers = require('./utils/helpers.js');
const handEval = require('./utils/hand_eval.js');

/*
 * Generate a single random card. All cards are two-character strings.
 * The first character must be a valid rank (a number 2 through 9 or a letter T, J, Q, K, A).
 * The second character must be a valid suit (s, h, c, or d).
 * @returns a valid two-char card string (e.g. '2s', '8h', 'Jd', 'Ac', etc.)
 */
function generateSingleCard() {
  const VALID_RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
  const VALID_SUITS = ['s', 'h', 'c', 'd'];

  const newCardRank = Math.floor(Math.random() * VALID_RANKS.length);
  const newCardSuit = Math.floor(Math.random() * VALID_SUITS.length);

  return VALID_RANKS[newCardRank] + VALID_SUITS[newCardSuit];
}

/*
 * Generate an array of random cards. Can be used to create a pair of hole cards, a board of 5 cards, a full hand of 7 cards, etc.
 * @param numCards is an integer determining how many cards should be generated.
 * @returns cards: an array containing the specified number of cards.
 */
function generateCards(numCards) {
  const cards = [];

  for (let i = 0; i < numCards; i++) {
    cards.push(generateSingleCard());
  }
  return cards;
}

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
function givePlayersCards(playerIDs) {
  const playersCards = {};
  for (let i = 0; i < numPlayers; i++) {
    playersCards[playerIDs[i]] = generateCards(2); // NOTE: multiple players might get the same hole cards, but that's fine for testing purposes
  }
  const boardCards = generateCards(5); // // NOTE: board might have some overlapping cards with players, but that's fine for testing purposes

  return [playersCards, boardCards];
}


/* *************************** TESTING BELOW HERE ************************** */

const numPlayers = Math.floor(Math.random() * 9) + 2; // 2 to 10 total players
const players = generateIDs(numPlayers);

const handInfo = givePlayersCards(players);
const playersCards = handInfo[0];
const boardCards = handInfo[1];

const handsEvaluated = handEval.rankPlayers(boardCards, playersCards);
const playersBestToWorst = handsEvaluated[0];
const playersHandInfo = handsEvaluated[1];

console.log('\nThe players and their cards:');
console.log(playersCards);
console.log('\nTHE BOARD: ' + boardCards);
console.log('\nThe players, ranked from best to worst: ');
for (let i = 0; i < numPlayers; i++) {
  const playerID = playersBestToWorst[i];
  const playerHand = playersHandInfo[playersBestToWorst[i]];
  console.log('Player ' + playerID + ' has ' + playersCards[playerID] + '; best 5 are ' + playerHand.cards + ' which is ' + playerHand.type + '\n');
}
