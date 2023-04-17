const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */


 class ListNode {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}
class Queue {
  constructor() {
      this.head = null;
      this.next = null;
  }
  enqueue(value) {
      const list = new ListNode(value);
      if (!this.head) {
          this.head = list;
          this.next = list;
      } else {
          this.next.next = list;
          this.next = list;
      }
  }
  dequeue() {
      if (!this.head) {
          return undefined;
      }
      const value = this.head.value;
      this.head = this.head.next;
      if (!this.head) {
          this.next = null;
      }
      return value;
  }
  getUnderlyingList() {
      return this.head;
  }
}


module.exports = {
  Queue
};
