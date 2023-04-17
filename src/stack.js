const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor(){
    this.length=0;
    this.top=null;
  }
  push(item) {
    const step = new Node(value);
    if(this.top){
      step.next=this.top;
      this.top=item;
    } else{
      this.top=item;
    }
  
  this.length ++;
  }

  pop() {
   const valPop=this.top;
   this.top= this.top.next;
   this.length --;
   return valPop;
  }

  peek() {
  return this.top.value;
  }
}

module.exports = {
  Stack
};
