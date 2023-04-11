import Graph from '../graph'

/**
 * É o mesmo da imagem tinG_PA, mas considerando que o nó 0
 * é omitido.
 */
export const tinyG_PA = `8
7
1 2
1 5
1 4
4 2
4 5
2 6
3 7`

export function setTinyG_PACoordinates(g: Graph, scale = 1): void {
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
