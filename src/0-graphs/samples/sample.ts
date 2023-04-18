import type Digraph from '../digraph'
import type Graph from '../graph'

export type GraphSample = {
  sample: string
  label: string
  setCoords: (g: Graph | Digraph, scale: number) => void
}
