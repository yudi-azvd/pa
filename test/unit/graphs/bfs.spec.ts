import Bfs from '@/0-graphs/bfs'
import Graph from '@/0-graphs/graph'
import { tinyCG } from '@/0-graphs/samples/tinyCG'

import { describe, it, expect } from 'vitest'

describe.skip('BFS', () => {
  it('tinyCG', () => {
    const g = Graph.fromString(tinyCG);
    const bfs = new Bfs(g)

    expect(bfs.distanceTo(0)).toEqual(0)
  })
})
