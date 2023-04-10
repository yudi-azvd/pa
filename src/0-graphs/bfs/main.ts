import Graph, { Vector, Node } from "../graph"
import { setTinyCGCoordinates, tinyCG } from "../samples/tinyCG"
import { setTinyG_PACoordinates, tinyG_PA } from "../samples/tinyG_PA"

let g: Graph

const canvas = document.querySelector<HTMLCanvasElement>('#canvas')!
const context = canvas.getContext('2d')!

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

let option = graphOptions[0]

main()

function main() {
  const select = document.querySelector<HTMLSelectElement>('#select-graph')!
  select.innerHTML = graphOptions.map((option, i) => `
    <option ${i === 0 ? 'selected="selected"' : ''} value="${i}"> ${option.label} </option>
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
  clearContext(context)
  renderGraphEdges(g.adj, g.coords)
  renderGraphNodes(g.adj, g.coords)
}


function clearContext(context: CanvasRenderingContext2D) {
  context.fillStyle = document.querySelector('body')?.style.backgroundColor!
  const width = Number(canvas.getAttribute('width'))
  const height = Number(canvas.getAttribute('height'))
  context.fillRect(0, 0, width, height)
}

function renderGraphNodes(nodes: (Node | null)[], coords: Vector[]) {
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

function renderGraphEdges(nodes: (Node | null)[], coords: Vector[]) {
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
