import Bfs from '@/0-graphs/bfs'
import Graph from '@/0-graphs/graph'
import { tinyG_PA } from '@/0-graphs/samples/tinyG_PA'

import { describe, it, expect } from 'vitest'

let g: Graph
let bfs: Bfs

describe.skip('BFS', () => {
  it('tinyCG', () => {
    g = Graph.fromString(tinyG_PA)
    bfs = new Bfs(g)

    expect(bfs.distance(1, 1)).toEqual(0)
    expect(bfs.distance(6, 6)).toEqual(0)

    expect(bfs.distance(1, 4)).toEqual(1)
    expect(bfs.distance(1, 2)).toEqual(1)
    expect(bfs.distance(1, 5)).toEqual(1)

    expect(bfs.distance(1, 6)).toEqual(2)
  })
})
