/*
 * A JS implementation of a LinkedList
 * The default assumption will be that any classes used as nodes have .next instance variables
 */

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;

    console.log('linkedlist initialized ');
  }

  // Add new element to end of list
  add = (element) => {
    const node = new Node(element);

    // If list is empty, add this element and make it the head
    if (this.head == null) {
      this.head = node;
    }
    // If list isn't empty, iterate to end of list and add this element there
    else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size += 1;
    return true;
  }

  // Add new element to list at position index
  insertAt = (element, index) => {
    if (index > 0 && index > this.size) {
      return false;
    }
    else {
      const node = new Node(element);

      if (index === 0) {
        node.next = this.head;
        this.head = node;
      }
      else {
        let incr = 0;
        let current = this.head;
        let previous = null;
        while (incr < index) {
          previous = current;
          current = current.next;
          incr += 1;
        }
        node.next = current;
        previous.next = node;
      }
      this.size += 1;
    }
    return true;
  }
}
