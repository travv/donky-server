/*
 * A Player object to store all player info
 */

class Player {
  constructor() {
    this.playerName = null;
    this.playerID = null;
    this.seatNum = null;
    this.totalBuyIn = null;
    this.currentStack = null;
    this.currentStreetBet = null;
    this.holeCards = null;
    this.isActive = false;
    this.isBigBlind = false;
    this.isAllIn = false;
    this.lastAction = null;
  }
  // a bunch of helper functions
  setPlayerName = (name) => {
    this.playerName = name;
  }
  getPlayerName = () => {
    return this.playerName;
  }
  setPlayerID = (ID) => {
    this.playerID = ID;
  }
  getPlayerID = () => {
    return this.playerID;
  }
  setSeatNum = (seat) => {
    this.seatNum = seat;
  }
  getSeatNum = () => {
    return this.seatNum;
  }
  updateBuyIn = (buyIn) => {
    this.totalBuyIn += buyIn;
  }
  getBuyIn = () => {
    return this.totalBuyIn;
  }
  updateCurrentStack = (updateAmount) => {
    this.currentStack += updateAmount;
  }
  getCurrentStack = () => {
    return this.currentStack;
  }
  updateCurrentStreetBet = (updateAmount) => {
    this.currentStreetBet += updateAmount;
  }
  getCurrentStreetBet = () => {
    return this.currentStreetBet;
  }
  setHoleCards = (cards) => {
    this.holeCards = cards;
  }
  getHoleCards = () => {
    return this.holeCards;
  }
  toggleActive = () => {
    if (this.isActive) {
      this.isActive = false;
    }
    else {
      this.Active = true;
    }
  }
  getIsActive = () => {
    return this.isActive;
  }
  toggleIsBigBLind = () => {
    if (this.isBigBlind) {
      this.isBigBlind = false;
    }
    else {
      this.isBigBlind = true;
    }
  }
  getIsAllIn = () => {
    return this.isAllIn;
  }
  toggleIsAllIn = () => {
    if (this.isAllIn) {
      this.isAllIn = false;
    }
    else {
      this.isAllIn = true;
    }
  }
  getCurrentResult = () => {
    return this.currentStack - this.totalBuyIn;
  }
  setLastAction = (action) => {
    this.lastAction = action;
  }
  getLastAction = (action) => {
    return this.lastAction;
  }

}

// Export this class
module.exports = {
  Player,
};
