/*
 * A Player object. These will store player information and be stored as nodes in a LinkedList
 */

export default class Player {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
