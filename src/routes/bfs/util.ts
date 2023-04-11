import Bfs from "@/0-graphs/bfs"
import Graph, { Node, type Vector } from "@/0-graphs/graph"
import type { GraphSample } from "@/0-graphs/samples/sample"

export function buildRenderGraphs(
  canvasOriginal: HTMLCanvasElement,
  ctxOriginal: CanvasRenderingContext2D,
  canvasBfs: HTMLCanvasElement,
  ctxBfs: CanvasRenderingContext2D,
  option: GraphSample,
) {
  const g = Graph.fromString(option.sample)
  option.setCoords(g, 3)
  clearContext(ctxOriginal, canvasOriginal)
  renderGraphEdges(ctxOriginal, g.adj, g.coords)
  renderGraphNodes(ctxOriginal, g.adj, g.coords)

  const bfs = new Bfs(g)
  const b = bfs.bfsTree
  option.setCoords(b, 3)
  clearContext(ctxBfs, canvasBfs)
  renderGraphEdges(ctxBfs, b.adj, b.coords)
  renderGraphNodes(ctxBfs, b.adj, b.coords)

  return { g, b, bfs }
}

export function clearContext(
  context: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  color = '#000',
) {
  const width = Number(canvas.getAttribute('width'))
  const height = Number(canvas.getAttribute('height'))
  context.fillStyle = color
  context.fillRect(0, 0, width, height)
}

export function renderGraphNodes(
  context: CanvasRenderingContext2D,
  nodes: (Node | null)[],
  coords: Vector[],
) {
  context.font = '18px Helvetica'

  const offset = 5
  for (let i = 0; i < nodes.length; i++) {
    context.fillStyle = '#fff'
    context.strokeStyle = '#0f0'
    context.beginPath()
    context.arc(coords[i].x, coords[i].y, 12, 0, 2 * Math.PI)
    context.fill()
    context.stroke()
    context.fillStyle = '#000'
    context.fillText(String(i), coords[i].x - offset, coords[i].y + offset)
  }
}

export function renderGraphEdges(
  context: CanvasRenderingContext2D,
  nodes: (Node | null)[],
  coords: Vector[],
) {
  let node: Node | null = null
  let curr: Node | null = null

  context.fillStyle = '#fff'
  context.strokeStyle = '#0f0'
  for (let i = 0; i < nodes.length; i++) {
    node = nodes[i]
    curr = node
    while (curr != null) {
      context.beginPath()
      context.moveTo(coords[i].x, coords[i].y)
      context.lineTo(coords[curr.data].x, coords[curr.data].y)
      context.stroke()
      curr = curr.next
    }
  }
}
