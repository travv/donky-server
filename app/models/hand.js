export default class Hand {
  constructor(players = {}) {
    this.players = players;
    this.playerToAct = this.players !== [] ? this.players[0] : null;

    console.log('initialized hand, players are: ', this.players);
  }

  // Remove player from being able to take future actions this hand. Use when a player folds OR goes all-in
  removePlayer = (playerID) => {
    console.log('removing player', playerID);
    // TODO: replace the next line with a simple pop once it's a linked list
    this.players = this.players.filter(player => player.id !== playerID);
  }
}
