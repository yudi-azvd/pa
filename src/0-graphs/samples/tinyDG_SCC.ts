import type Graph from '@/0-graphs/graph'
import type { GraphSample } from './sample'
import type Digraph from '../digraph'

const graph = `8
12
0 1
2 1
// Tem que completar isso. mó preguiça
3 7`

export function setCoords(g: Graph | Digraph, scale = 1): void {
  g.coords[0].x = 10 * scale
  g.coords[0].y = 10 * scale

  g.coords[2].x = 20 * scale
  g.coords[2].y = 20 * scale

  g.coords[6].x = 20 * scale
  g.coords[6].y = 40 * scale

  g.coords[4].x = 30 * scale
  g.coords[4].y = 10 * scale

  g.coords[5].x = 40 * scale
  g.coords[5].y = 35 * scale

  g.coords[1].x = 50 * scale
  g.coords[1].y = 15 * scale

  g.coords[3].x = 70 * scale
  g.coords[3].y = 10 * scale

  g.coords[7].x = 80 * scale
  g.coords[7].y = 25 * scale
}

export const tinyDG_SCC: GraphSample = {
  label: 'tinyDG_SCC',
  sample: graph,
  setCoords,
}
