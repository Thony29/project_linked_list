import Node from "./node.js";

class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // prepend(value) adds a new node containing value to the start of the list

  prepend(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // append(value) adds a new node containing value to the end of the list

  append(data) {
    let node = new Node(data);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  sizee() {
    return this.size;
  }

  // head returns the first node in the list
  /////////========
  head2() {
    if (!this.head) {
      return null;
    }
    return this.head.data;
  }

  //   tail returns the last node in the list

  ///////========
  tail() {
    if (!this.head) {
      return null;
    }

    let list = this.head;
    while (list.nextNode) {
      list = list.nextNode;
    }
    return list.data;
  }

  //insertAt(value, index) that inserts a new node with the provided value at the given index.
  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }
    if (index == 0) {
      this.prepend = data;
      return;
    }

    const node = new Node(data);
    let current, previous;

    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }

  //   at(index) returns the node at the given index

  at(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  // pop removes the last element from the list

  pop() {
    let curr = this.head;
    let prev = null;

    while (curr.next != null) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = null;

    this.size--;
  }

  //   contains(value) returns true if the passed in value is in the list and otherwise returns false.
  contains(data) {
    while (this.head != null) {
      if (this.head.data === data) {
        return true;
      }

      this.head = this.head.next;
    }

    return false;
  }

  //   find(value) returns the index of the node containing value, or null if not found.
  find(data) {
    let head = this.head;
    let index = 0;
    while (head != null) {
      if (head.data === data) return index;

      head = head.next;
      index++;
    }
    return null;
  }

  /////////////////////
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  //////////////////

  //   toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    let head = this.head;
    let stringList = "";
    while (head != null) {
      stringList += `(${head.data})->`;
      head = head.next;
    }
    return (stringList += "null");
  }
}

/////////////////////////////////////////////////////////////////
const ll = new linkedList();

ll.prepend(100);
ll.prepend(200);
ll.prepend(300);
ll.append(400);
ll.append(500);
ll.insertAt(600, 2);
// ll.sizee();

// console.log(ll);
// console.log(ll.size);
// console.log(ll.head2());
// console.log(ll.tail());
// console.log(ll.pop());
// console.log(ll.sizee())
ll.printListData();
// console.log(ll.contains(100));
console.log(ll.find(400));
console.log(ll.toString())

// ll.at(4);
// ll.at(4);
