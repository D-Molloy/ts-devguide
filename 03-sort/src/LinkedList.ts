import { Sorter } from './Sorter'

class Node {
  next: Node | null = null;

  constructor(public data: number) { }
}

export class LinkedList extends Sorter {
  // if `next` === null, then we're at the end of the list
  head: Node | null = null;

  // Add a node to the linked list
  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    // looks through all the nodes until we get to the end of the list
    while (tail.next) {
      tail = tail.next;
    }
    // put the newly created node at the end of the list
    tail.next = node;
  }

  get length(): number {
    // if there is no head (empty list)
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;
    // count up all of the nodes
    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  // receive an index and return the node at that position
  at(index: number): Node {
    if (!this.head) {
      throw new Error('Empty Linked List');
    }

    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      // if we've counted up to the specified index
      if (counter === index) {
        return node;
      }

      // continue looking to the Next node
      counter++;
      node = node.next;
    }

    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    // NOT ACTUALLY SWAPPING THE NODE - JUST SWAPPING THE DATA OF THE NODES
    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}

