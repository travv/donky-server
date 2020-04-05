import LinkedList from './linked_list';
import Player from './player';

class Game {
  constructor() {
    this.masterList = new LinkedList();
    this.handHistory = [];
    this.results = [];
    this.bigBlind = null;
    this.maxBuyin = null;
    this.minBuyin = null;

    console.log('initialized game, players are: ', this.players);
  }

  addPlayer = (id, username, buyIn, seatNum) => {
    let player = new Player();
    player.setPlayerID(id);
    player.setPlayerName(username);
    player.updateBuyIn(buyIn);
    player.setSeatNum(seatNum);
    this.masterList.add(player);
    console.log('added a player, players are: now ', this.players);
  }

  updateHandHistory = (hand) => {
    this.handHistory.add(hand);
  }
  getHand = (id) => {
    return this.handHistory[id];
  }
  updateResults = () => {
    let currPlayer = this.masterList.getHead();
    for (let i = 0; i < this.masterList.sizeOfList(); i++) {
      this.results.push({
        name: currPlayer.getName(),
        result: currPlayer.getCurrentResult(),
      });
      currPlayer = currPlayer.getNext();
    }
  }
  setBigBlind = (blind) => {
    this.bigBlind = blind;
  }
  getBigBlind = () => {
    return this.bigBlind;
  }
  setMax = (max) => {
    this.maxBuyin = max;
  }
  getMax = () => {
    return this.maxBuyin;
  }
  setMin = (min) => {
    this.minBuyin = min;
  }
  getMin = () => {
    return this.minBuyin;
  }

}

// Export this class
module.exports = {
  Game,
};
