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
  constructor(x) {
    this.value = x;
    this.next = null;
   }
}
class Queue {
constructor(){
  this.head = null; 
}
  getUnderlyingList() {
    return this.head;
  }
  enqueue(value) {
    this.head = add(this.head, value);
    function add(node,value){
      if(!node){
        node = new ListNode(value); 
      }else{      
        node.next = add(node.next,value)
      } 
      return node;
    }    
  }
  

  dequeue(){
    let deleted = this.head;
    this.head = this.head.next;
    return deleted.value;
    
  }
  
}
// const queue = new Queue();

// queue.enqueue(5)
// queue.enqueue(1)
// console.log(queue.dequeue())
// // console.log(queue.getUnderlyingList());
// console.log(queue)


module.exports = {
  Queue
};
