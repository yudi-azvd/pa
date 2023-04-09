import Graph from '@/0-graphs/graph'
import { tinyCG } from '@/0-graphs/samples/tinyCG'
import { tinyG } from '@/0-graphs/samples/tinyG'
import { tinyGex2 } from '@/0-graphs/samples/tinyGex2'
import { describe, it, expect } from 'vitest'

describe('Graph', () => {
  it('simple test', () => {
    const g = new Graph(6)
    expect(g.edges).toEqual(0)

    g.addEdge(0, 1)
    expect(g.edges).toEqual(1)

    g.addEdge(0, 2)
    expect(g.edges).toEqual(2)
  })

  it.each([
    [tinyCG, 8],
    [tinyG, 13],
    [tinyGex2, 16],
  ])('graph %p has %p edges', (graph: string, edges: number) => {
    const g = Graph.fromString(graph);
    expect(g.edges).toEqual(edges)
  })
})
