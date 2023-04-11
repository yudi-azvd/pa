import type { GraphSample } from "./sample"

export const graph = `13
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

export const tinyG: GraphSample = {
  label: 'tiny G',
  setCoords: () => { console.error('coords not set') },
  sample: graph,
}
