import type { GraphSample } from "./sample"

export const graph = `12
16
 8 4
 2 3
 1 11
 0 6
 3 6
10 3
 7 11
 7 8
11 8
 2 0
 6 2
 5 2
 5 10
 8 1
 5 0
 4 1`

export const tinyGex2: GraphSample = {
  label: 'tiny Gex2',
  sample: graph,
  setCoords: () => { console.error('coords not set') },
}
