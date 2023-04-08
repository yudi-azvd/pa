class Node {
  data = 0
  next: Node | null = null

  static create(vertex: number, next: Node) {
    const n = new Node()
    n.data = vertex
    n.next = next
    return n
  }
}

class Graph {
  adj: Node[] = [];
  edges: number = 0
  vertices: number = 0

  constructor(vertices: number) {
    this.adj = new Array(vertices)
    this.vertices = vertices
  }

  addEdge(v: number, w: number) {
    this.edges++
    this.adj[w] = Node.create(v, this.adj[w])
    this.adj[v] = Node.create(w, this.adj[v])
  }

  toString() {
    let result = ''
    let curr: Node | null = null
    for (let i = 0; i < this.adj.length; i++) {
      result += `${i}: `
      curr = this.adj[i]
      while (curr != null) {
        result += `${curr.data} `
        curr = curr.next
      }
      result += '\n'
    }
    return result
  }
}

Graph.prototype.toString = function () {
  let result = ''
  let curr: Node | null = null
  for (let i = 0; i < this.adj.length; i++) {
    result += `${i}: `
    curr = this.adj[i]
    while (curr != null) {
      result += `${curr.data} `
      curr = curr.next
    }
    result += '\n'
  }
  return result
}


export default Graph
