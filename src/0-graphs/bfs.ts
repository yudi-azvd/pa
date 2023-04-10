import Graph from "./graph";

export default class Bfs {
  visited: boolean[] = []


  constructor(private graph: Graph, src: number = 0) {
    this.bfs(src)
  }

  private bfs(src: number) {
    for (let i = 0; i < this.graph.adj.length; i++) {
      if (this.graph.adj[i].data == src) { }
    }
  }

  distance(v: number, w: number): number {
    return this.graph.edges + v + w
  }
}
