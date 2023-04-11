import type Graph from "../graph"

export type GraphSample = {
  sample: string
  label: string,
  setCoords: (g: Graph, scale: number) => void
}
