export class Node {
  data = 0
  next: Node | null = null

  static create(vertex: number, next: Node | null) {
    const n = new Node()
    n.data = vertex
    n.next = next
    return n
  }
}

export type Vector = {
  x: number
  y: number
}

export default class Digraph {
  adj: (Node | null)[] = []
  edges = 0
  vertices = 0
  coords: Vector[] = []

  constructor(vertices: number) {
    if (vertices <= 0) throw new Error('Invalid number of vertices')

    this.adj = new Array(vertices).fill(null)
    this.vertices = vertices
    this.coords = new Array(vertices)
    for (let i = 0; i < this.coords.length; i++) {
      this.coords[i] = { x: 0, y: 0 }
    }
  }

  private validateVertex(v: number) {
    if (v < 0 || v > this.vertices) throw new Error('Invalid vertex ' + v)
  }

  addEdge(v: number, w: number) {
    this.validateVertex(v)
    this.validateVertex(w)

    this.edges++
    this.adj[v] = Node.create(w, this.adj[v])
  }

  hasEdge(v: number, w: number): boolean {
    this.validateVertex(v)
    this.validateVertex(w)

    let node = this.adj[v]
    while (node) {
      if (node.data === w) return true
      node = node.next
    }

    return false
  }

  /**
   * A ordem normal é iterar nos nós de 0..n
   *
   * Se você quiser manter a ordem, itere nos nós na ordem
   * n-1..0.
   */
  reversed(): Digraph {
    const reversed = new Digraph(this.vertices)
    let curr: Node | null
    for (let i = 0; i < this.vertices; i++) {
      curr = this.adj[i]
      while (curr) {
        reversed.addEdge(curr.data, i)
        curr = curr.next
      }
    }
    return reversed
  }

  toString() {
    let result = ''
    let curr: Node | null = null
    for (let i = 0; i < this.adj.length; i++) {
      result += `${i}:`
      curr = this.adj[i]
      while (curr != null) {
        result += ` ${curr.data}`
        curr = curr.next
      }
      result += '\n'
    }
    return result
  }

  static fromString(s: string) {
    const lines = s.split('\n')
    const [vertices, edges] = lines.splice(0, 2)
    const g = new Digraph(Number(vertices))

    let i = 0
    for (; i < lines.length; i++) {
      const [v, w] = lines[i].split(/\s+/)
      g.addEdge(Number(v), Number(w))
    }

    if (i !== Number(edges))
      throw new Error(`${i} === ${edges} The given string is problably bad formatted`)
    return g
  }

  /**
   * Pensar em precedência
   */
  topologicallyOrdered() {
    return [0]
  }
}
