class Queue {
    constructor(handle) {
      this.handle = handle;
      this.queue = {};
      this.front = 0;
      this.rear = -1;
      this.size = 0;
    }
  
    isFull() {
      return this.size === this.handle;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    enqueue(item) {
      if (this.isFull()) {
        console.log("Queue is full so cannot enqueue item.");
        return;
      }
      this.rear++;
      this.queue[this.rear] = item;
      this.size++;
    }
  
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue is empty and cannot dequeue item");
      }
      let dequeuedItem = this.queue[this.front];
      this.queue[this.front];
      this.front++;
      this.size--;
      return dequeuedItem;
    }
  
    getSize() {
      return this.size;
    }
  
    print() {
      let result = "";
      for (let i = this.front; i <= this.rear; i++) {
        result += this.queue[i] + " ";
      }
      console.log("Queue:", result);
    }
  }
  
  const queue = new Queue(5); 
  console.log("Is empty:", queue.isEmpty());
  // queue.enqueue(1,2,3,4,5);

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);
  console.log("Is full:", queue.isFull());

  queue.enqueue(6); 
  queue.print(); 
  console.log("Dequeued item:", queue.dequeue());
  queue.print(); 


// implement a stack with an array - length, push, pop, peeklast, peekFirst, isEmpty, print
// implement a queue with an object - isFull, isEmpty, Enqueue, dequeue, sizem print
// List 10 hosting platform that you know
