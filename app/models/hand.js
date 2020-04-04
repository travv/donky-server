export default class Hand {
  constructor(players = {}) {
    this.players = players;
    this.playerToAct = this.players !== [] ? this.players[0] : null;

    console.log('initialized hand, players are: ', this.players);
  }

}
