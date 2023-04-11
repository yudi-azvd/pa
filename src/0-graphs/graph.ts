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

class Graph {
  adj: (Node | null)[] = []
  edges = 0
  vertices = 0
  coords: Vector[] = []

  constructor(vertices: number) {
    if (vertices < 0) throw new Error('Invalid number of vertices')

    this.adj = new Array(vertices)
    this.vertices = vertices
    this.coords = new Array(vertices)
    for (let i = 0; i < this.coords.length; i++) {
      this.coords[i] = { x: 0, y: 0 }
    }
  }

  private validateVertex(v: number) {
    if (v < 0 || v > this.vertices) throw new Error('Invalid vertex ' + v)
  }

  /**
   * Não checa se `v` ou `w` já estão conectados.
   */
  addEdge(v: number, w: number) {
    this.validateVertex(v)
    this.validateVertex(w)

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

  /**
   * A string `s` deve vir no seguinte formato:
   *
   * ```
   * V
   * E
   * v1 w1
   * v2 w2
   * v3 w3
   * v4 w4
   * ...
   * ```
   *
   * Em que `V` é o número de vértices e `E` é o número de arestas.
   * 0 <= `vi`, `wi` < `V` e `i` < `E`.
   *
   * @param s Representação em string de um grafo.
   */
  static fromString(s: string) {
    const lines = s.split('\n')
    const [vertices, edges] = lines.splice(0, 2)
    const g = new Graph(Number(vertices))

    let i = 0
    for (; i < lines.length; i++) {
      const [v, w] = lines[i].split(' ')
      g.addEdge(Number(v), Number(w))
    }

    if (i !== Number(edges))
      throw new Error(`${i} === ${edges} The given string is problably bad formatted`)
    return g
  }
}

export default Graph
