/*
 * A JS implementation of a LinkedList
 * The default assumption will be that any classes used as nodes have .next instance variables
 */

export default class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;

    console.log('initialized hand, players are: ', this.players);
  }

  // Remove player from being able to take future actions this hand. Use when a player folds OR goes all-in
  removePlayer = (playerID) => {
    console.log('removing player', playerID);
    // TODO: replace the next line with a simple pop once it's a linked list
    this.players = this.players.filter(player => player.id !== playerID);
  }
}
