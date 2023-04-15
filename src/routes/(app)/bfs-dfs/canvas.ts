import Bfs from '@/0-graphs/bfs'
import Dfs from '@/0-graphs/dfs'
import Graph, { Node, type Vector } from '@/0-graphs/graph'
import type { GraphSample } from '@/0-graphs/samples/sample'

const textSize = '16px'
const textColor = '#fff'
const accentColor = '#646cff'
const nodeBackgroundColor = '#242424'
const nodeRadius = 13
const canvasBackgroundColor = '#2e2e2e'
const lineWidth = 2

const coordsScale = 2.5

export function buildRenderGraphs(
  canvasOriginal: HTMLCanvasElement,
  ctxOriginal: CanvasRenderingContext2D,
  canvasBfs: HTMLCanvasElement,
  ctxBfs: CanvasRenderingContext2D,
  canvasDfs: HTMLCanvasElement,
  ctxDfs: CanvasRenderingContext2D,
  option: GraphSample,
) {
  const g = Graph.fromString(option.sample)
  option.setCoords(g, coordsScale)
  clearContext(ctxOriginal, canvasOriginal)
  renderGraphEdges(ctxOriginal, g.adj, g.coords)
  renderGraphNodes(ctxOriginal, g.adj, g.coords)

  const bfs = new Bfs(g)
  const b = bfs.bfsTree
  option.setCoords(b, coordsScale)
  clearContext(ctxBfs, canvasBfs)
  renderGraphEdges(ctxBfs, b.adj, b.coords)
  renderGraphNodes(ctxBfs, b.adj, b.coords)

  const dfs = new Dfs(g)
  const d = dfs.dfsTree
  option.setCoords(d, coordsScale)
  clearContext(ctxDfs, canvasDfs)
  renderGraphEdges(ctxDfs, d.adj, d.coords)
  renderGraphNodes(ctxDfs, d.adj, d.coords)

  return { g, b, d, bfs }
}

export function clearContext(
  context: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  color = canvasBackgroundColor,
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
  context.font = textSize + ' Helvetica'
  context.lineWidth = lineWidth
  const offset = 5
  for (let i = 0; i < nodes.length; i++) {
    context.fillStyle = nodeBackgroundColor
    context.strokeStyle = accentColor
    context.beginPath()
    context.arc(coords[i].x, coords[i].y, nodeRadius, 0, 2 * Math.PI)
    context.fill()
    context.stroke()
    context.fillStyle = textColor
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

  context.lineWidth = lineWidth
  context.fillStyle = nodeBackgroundColor
  context.strokeStyle = accentColor
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
