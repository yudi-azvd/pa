import type Digraph from '../digraph'
import type Graph from '../graph'
import type { GraphSample } from './sample'

const graph = `5
7
0 1
0 3
1 4
1 3
2 0
3 2
4 3`

function setCoords(g: Graph | Digraph, scale = 1) {
  return
}

const label = 'tiny DG PA 1'
export const tinyDG_PA_1: GraphSample = {
  label,
  setCoords,
  sample: graph,
}
