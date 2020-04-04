/*
 * A fairly standard LinkedList class
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
    // Create new node
    const node = new Node(element);

    // If list is empty, add element at start, otherwise iterate to end and add it there
    if (this.head == null) {
      this.head = node;
    }
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
    // If index out of range, can't do anything
    if (index > 0 && index > this.size) {
      return false;
    }
    // Create new node
    const node = new Node(element);
    // If list is empty add element directly, otherwise iterate to index and insert there
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    }
    else {
      let current = this.head;
      let previous = null;
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }
      node.next = current;
      previous.next = node;
    }
    this.size += 1;
    return true;
  }

  // Remove element from specific index
  removeFrom = (index) => {
    // If index out of range, can't do anything
    if (index > 0 && index > this.size) {
      return false;
    }
    let current = this.head;
    let previous = current;
    // Iterate through list and remove element from there
    if (index === 0) {
      this.head = current.next;
    }
    else {
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size -= 1;
    return current.element;
  }

  // Remove a specific element
  removeElement = (element, compareFunction) => {
    let current = this.head;
    let previous = null;

    while (current != null) {
      if (compareFunction(element, current)) {
        if (previous === null) {
          this.head = current.next;
        }
        else {
          previous.next = current.next;
        }
        this.size -= 1;
        return current;
      }

      previous = current;
      current = current.next;
      if (current === this.head) {
        break;
      }
    }
    return false;
  }

  // Check to see the size of the list
  sizeOfLife = () => {
    return this.size;
  }

  // Check to see if the list is empty
  isEmpty = () => {
    return this.size === 0;
  }
}
