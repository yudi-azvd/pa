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
    const [vertices, _] = lines.splice(0, 2)
    const g = new Graph(Number(vertices))

    for (let i = 0; i < lines.length; i++) {
      const [v, w] = lines[i].split(' ')
      g.addEdge(Number(v), Number(w))
    }

    return g
  }
}


export default Graph
