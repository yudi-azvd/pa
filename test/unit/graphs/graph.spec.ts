import Graph from '@/0-graphs/graph'
import { tinyCG } from '@/0-graphs/samples/tinyCG'
import { tinyG } from '@/0-graphs/samples/tinyG'
import { tinyG_PA } from '@/0-graphs/samples/tinyG_PA'
import { tinyGex2 } from '@/0-graphs/samples/tinyGex2'

import { describe, it, expect } from 'vitest'

let g: Graph

describe('Graph', () => {
  it('simple test', () => {
    g = new Graph(6)
    expect(g.edges).toEqual(0)

    g.addEdge(0, 1)
    expect(g.edges).toEqual(1)

    g.addEdge(0, 2)
    expect(g.edges).toEqual(2)
  })

  it('rejects invalid vertices', async () => {
    g = new Graph(5)

    expect(() => g.addEdge(-1, 0)).toThrowError('Invalid vertex -1')

    expect(() => g.addEdge(0, 6)).toThrowError('Invalid vertex 6')
  })

  it('rejects invalid number of vertices', () => {
    expect(() => new Graph(-1)).toThrowError('Invalid number of vertices')
  })

  it.each([
    [tinyCG, 8],
    [tinyG, 13],
    [tinyGex2, 16],
    [tinyG_PA, 7],
  ])('graph %p has %p edges', (graph: string, edges: number) => {
    g = Graph.fromString(graph)
    expect(g.edges).toEqual(edges)
  })
})
