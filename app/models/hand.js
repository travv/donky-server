import LinkedList from './linked_list';

class Hand {
  constructor(players = {}) {
    this.players = new LinkedList();
    this.playerToAct = this.players !== [] ? this.players[0] : null;

    console.log('initialized hand, players are: ', this.players);
  }
}

// Export this class
module.exports = {
  Hand,
};
