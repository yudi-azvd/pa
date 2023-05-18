// Roubado diretamente daqui
// https://algs4.cs.princeton.edu/13stacks/Bag.java.html

class Node<Item> {
  item: Item | null = null
  next: Node<Item> | null = null
}

export default class Bag<Item> {
  first: Node<Item> | null = null
  n = 0

  isEmpty() {
    return this.first === null
  }

  size() {
    return this.n
  }

  add(item: Item) {
    const oldFirst: Node<Item> | null = this.first
    this.first = new Node<Item>()
    this.first.item = item
    this.first.next = oldFirst
    this.n++
  }
}
