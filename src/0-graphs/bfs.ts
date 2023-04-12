import Graph, { Node } from './graph'

export default class Bfs {
  visited: boolean[]
  bfsTree: Graph

  constructor(private graph: Graph, src = 0) {
    this.visited = new Array(graph.vertices).fill(false)
    this.bfsTree = new Graph(graph.vertices)
    this.bfs(src)
  }

  private bfs(src: number) {
    // FIXME: quase certeza que essa fila não tem a complexidade de uma fila
    const queue: number[] = []
    let i = src++
    for (i = 0; i < this.graph.adj.length; i++) {
      if (this.visited[i]) continue

      queue.push(i)
      this.visited[i] = true

      while (queue.length !== 0) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const u = queue.shift()!
        let v: Node | null = this.graph.adj[u]
        while (v) {
          if (!this.visited[v.data]) {
            this.visited[v.data] = true
            this.bfsTree.addEdge(v.data, u)
            queue.push(v.data)
          }
          v = v.next
        }
      }
    }
  }

  distance(v: number, w: number): number {
    return this.graph.edges + v + w
  }
}
