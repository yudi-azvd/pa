import Bag from './bag'

class DirectedEdge {
  constructor(readonly v: number, readonly w: number, readonly weight: number) {}

  toString() {
    return `${this.v}->${this.w} ${this.weight}`
  }
}

export default class WeightedDigraph {
  readonly adj: Bag<DirectedEdge | null>[] = []
  edges = 0

  constructor(readonly vertices: number) {
    this.adj = new Array<Bag<DirectedEdge | null>>(vertices)

    for (let i = 0; i < vertices; i++) {
      this.adj[i] = new Bag<DirectedEdge | null>()
    }
  }

  addEdge(e: DirectedEdge) {
    this.adj[e.v].add(e)
    this.edges++
  }
}
