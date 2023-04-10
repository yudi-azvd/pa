import Bfs from "../bfs"
import Graph, { Vector, Node } from "../graph"
import { setTinyCGCoordinates, tinyCG } from "../samples/tinyCG"
import { setTinyG_PACoordinates, tinyG_PA } from "../samples/tinyG_PA"

let g: Graph
let bfs: Bfs
let b: Graph

const canvasOriginal = document.querySelector<HTMLCanvasElement>('#canvas-original')!
const contextOriginal = canvasOriginal.getContext('2d')!

const canvasBfs = document.querySelector<HTMLCanvasElement>('#canvas-bfs')!
const contextBfs = canvasBfs.getContext('2d')!

interface GraphOption {
  graphAsStr: string,
  setCoords: (g: Graph, scale: number) => void,
  label: string,
}

const graphOptions: GraphOption[] = [
  {
    graphAsStr: tinyCG,
    setCoords: setTinyCGCoordinates,
    label: 'tiny CG',
  },
  {
    graphAsStr: tinyG_PA,
    setCoords: setTinyG_PACoordinates,
    label: 'tiny PA'
  }
]

const DEFAULT_GRAPTH_OPTION = 1
let option = graphOptions[DEFAULT_GRAPTH_OPTION]

main()

function main() {
  const select = document.querySelector<HTMLSelectElement>('#select-graph')!
  select.innerHTML = graphOptions.map((option, i) => `
    <option ${i === DEFAULT_GRAPTH_OPTION ? 'selected="selected"' : ''} value="${i}"> ${option.label} </option>
  `).join('\n')

  select.onchange = () => {
    const option = graphOptions[Number(select.value)]
    showGraph(option)
  }

  showGraph(option)
}


function showGraph(option: GraphOption) {
  g = Graph.fromString(option.graphAsStr)
  option.setCoords(g, 3)

  clearContext(contextOriginal, canvasOriginal)
  renderGraphEdges(contextOriginal, g.adj, g.coords)
  renderGraphNodes(contextOriginal, g.adj, g.coords)

  bfs = new Bfs(g)
  b = bfs.bfsTree
  option.setCoords(b, 3)
  clearContext(contextBfs, canvasBfs)
  renderGraphEdges(contextBfs, b.adj, b.coords)
  renderGraphNodes(contextBfs, b.adj, b.coords)

  document.querySelector<HTMLPreElement>('#pre-original')!.innerHTML = g.toString()
  document.querySelector<HTMLPreElement>('#pre-bfs')!.innerHTML = b.toString()
  // codeOriginal.innerHTML = g.toString()
}


function clearContext(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
  const width = Number(canvas.getAttribute('width'))
  const height = Number(canvas.getAttribute('height'))
  context.fillStyle = document.querySelector('body')?.style.backgroundColor!
  context.fillRect(0, 0, width, height)
}

function renderGraphNodes(context: CanvasRenderingContext2D, nodes: (Node | null)[], coords: Vector[]) {
  context.font = '18px Helvetica'

  let offset = 5
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

function renderGraphEdges(context: CanvasRenderingContext2D, nodes: (Node | null)[], coords: Vector[]) {
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
