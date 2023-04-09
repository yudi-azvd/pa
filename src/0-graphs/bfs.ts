import Graph from "./graph";

export default class Bfs {
  constructor(private graph: Graph) { }

  distanceTo(v: number): number {
    return this.graph.edges + v
  }
}
