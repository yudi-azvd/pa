import type WeightedDigraph from './weighteddigraph'

export default class Dijkstra {
  distTo: number[] = []
  constructor(readonly g: WeightedDigraph, readonly src: number = 0) {
    this.distTo = new Array(g.vertices).fill(0)
  }
}
