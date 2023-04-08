import Graph from '@/0-graphs/graph'
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
})
