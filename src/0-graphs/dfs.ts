import Graph, { Node } from "./graph"

export default class Dfs {
  visited: boolean[]
  dfsTree: Graph

  constructor(private graph: Graph) {
    this.visited = new Array(graph.vertices).fill(false)
    this.dfsTree = new Graph(graph.vertices)

    for (let v = 0; v < this.graph.adj.length; v++) {
      if (!this.visited[v])
        this.dfs(v)
    }
  }

  private dfs(v: number) {
    this.visited[v] = true
    let w: Node | null = this.graph.adj[v]
    while (w) {
      if (!this.visited[w.data]) {
        this.dfsTree.addEdge(v, w.data)
        this.dfs(w.data)
      }
      w = w.next
    }
  }
}
