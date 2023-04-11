import Graph from '../graph'

export const tinyCG = `6
8
0 5
2 4
2 3
1 2
0 1
3 4
3 5
0 2`

export function setTinyCGCoordinates(g: Graph, scale = 1): void {
  g.coords[0].x = 10 * scale
  g.coords[0].y = 10 * scale

  g.coords[1].x = 30 * scale
  g.coords[1].y = 30 * scale

  g.coords[2].x = 60 * scale
  g.coords[2].y = 10 * scale

  g.coords[3].x = 45 * scale
  g.coords[3].y = 45 * scale

  g.coords[4].x = 60 * scale
  g.coords[4].y = 50 * scale

  g.coords[5].x = 10 * scale
  g.coords[5].y = 50 * scale
}
