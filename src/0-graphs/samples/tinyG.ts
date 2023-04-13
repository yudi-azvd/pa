import type Graph from '../graph'
import type { GraphSample } from './sample'

const graph = `13
13
0 5
4 3
0 1
9 12
6 4
5 4
0 2
11 12
9 10
0 6
7 8
9 11
5 3`

function setCoords(g: Graph, scale = 1) {
  g.coords[0].x = 10 * scale
  g.coords[0].y = 10 * scale

  g.coords[1].x = 20 * scale
  g.coords[1].y = 20 * scale

  g.coords[2].x = 40 * scale
  g.coords[2].y = 20 * scale

  g.coords[3].x = 20 * scale
  g.coords[3].y = 40 * scale

  g.coords[4].x = 40 * scale
  g.coords[4].y = 45 * scale

  g.coords[5].x = 10 * scale
  g.coords[5].y = 50 * scale

  g.coords[6].x = 60 * scale
  g.coords[6].y = 15 * scale

  g.coords[7].x = 80 * scale
  g.coords[7].y = 15 * scale

  g.coords[8].x = 95 * scale
  g.coords[8].y = 15 * scale

  g.coords[9].x = 80 * scale
  g.coords[9].y = 40 * scale

  g.coords[10].x = 95 * scale
  g.coords[10].y = 40 * scale

  g.coords[11].x = 80 * scale
  g.coords[11].y = 55 * scale

  g.coords[12].x = 95 * scale
  g.coords[12].y = 55 * scale
}

const label = 'tiny G'
export const tinyG: GraphSample = {
  label,
  setCoords,
  sample: graph,
}
