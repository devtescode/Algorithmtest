class Stack {
    constructor() {
      this.elements = [];
    }
  
    length() {
      return this.elements.length;
    }
  
    push(item) {
      this.elements.push(item);
    }
  
    pop() {
      return this.elements.pop();
    }
  
    peekLast() {
      return this.elements[this.length - 1];
    }
  
    peekFirst() {
      return this.elements[0];
    }
  
    isEmpty() {
      return this.length === 0;
    }
  
    print() {
      console.log("Stack:", this.elements.join(" "));
    }
  }
  
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  
  stack.print(); 
  
  console.log("Peek last:", stack.peekLast());
  console.log("Peek first:", stack.peekFirst()); 
  
  console.log("Popped item:", stack.pop()); 
  
  stack.print();
  