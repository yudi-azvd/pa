<script lang="ts">
  import { base } from '$app/paths'
  import { onMount } from 'svelte'
  import { setTinyCGCoordinates, tinyCG } from '@/0-graphs/samples/tinyCG'
  import { setTinyG_PACoordinates, tinyG_PA } from '@/0-graphs/samples/tinyG_PA'
  import Graph, { Node, type Vector } from '@/0-graphs/graph'
  import Bfs from '@/0-graphs/bfs'

  let g: Graph
  let bfs: Bfs
  let b: Graph

  let canvasOriginal: HTMLCanvasElement
  let contextOriginal: CanvasRenderingContext2D | null

  let canvasBfs: HTMLCanvasElement
  let contextBfs: CanvasRenderingContext2D | null

  interface GraphOption {
    graphAsStr: string
    setCoords: (g: Graph, scale: number) => void
    label: string
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
      label: 'tiny PA',
    },
  ]

  const DEFAULT_GRAPTH_OPTION = 1
  let graphOptionId = DEFAULT_GRAPTH_OPTION
  let option = graphOptions[DEFAULT_GRAPTH_OPTION]

  onMount(() => {
    contextOriginal = canvasOriginal.getContext('2d')
    contextBfs = canvasBfs.getContext('2d')
    if (contextOriginal && contextBfs) {
      showGraph(contextOriginal, contextBfs, option)
    }
  })

  function showGraph(
    ctxOriginal: CanvasRenderingContext2D,
    ctxBfs: CanvasRenderingContext2D,
    option: GraphOption,
  ) {
    g = Graph.fromString(option.graphAsStr)
    option.setCoords(g, 3)

    clearContext(ctxOriginal, canvasOriginal)
    renderGraphEdges(ctxOriginal, g.adj, g.coords)
    renderGraphNodes(ctxOriginal, g.adj, g.coords)

    bfs = new Bfs(g)
    b = bfs.bfsTree
    option.setCoords(b, 3)
    clearContext(ctxBfs, canvasBfs)
    renderGraphEdges(ctxBfs, b.adj, b.coords)
    renderGraphNodes(ctxBfs, b.adj, b.coords)
  }

  function clearContext(
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    color = '#000',
  ) {
    const width = Number(canvas.getAttribute('width'))
    const height = Number(canvas.getAttribute('height'))
    // context.fillStyle = document.querySelector('body')?.style.backgroundColor!
    context.fillStyle = color
    context.fillRect(0, 0, width, height)
  }

  function renderGraphNodes(
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

  function renderGraphEdges(
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
</script>

<svelte:head>
  <title>Grafos > BFS</title>
</svelte:head>

<div id="main" style="display: flex; flex-direction: column">
  <a href="{base}/">Início</a>

  <h1>Grafos > BFS</h1>

  <select
    id="select-graph-option"
    value={graphOptionId}
    on:change={(ev) => {
      graphOptionId = Number(ev.currentTarget.value)
      option = graphOptions[graphOptionId]
      if (contextOriginal && contextBfs) showGraph(contextOriginal, contextBfs, option)
    }}
  >
    {#each graphOptions as option, i}
      <option value={i}>
        {option.label}
      </option>
    {/each}
  </select>

  <div id="two-panel">
    <div class="canvas-pre">
      <h3>Original</h3>
      <canvas width="350" height="300" id="canvas-original" bind:this={canvasOriginal} />
      <p>Grafo em texto:</p>

      {#if g}
        <pre>{g.toString()} </pre>
      {/if}
    </div>

    <!-- <span>
      Eu quero colocar um espaço bem aqui, mas
      <code>justify-content</code> não funciona
    </span> -->

    <div class="canvas-pre">
      <h3>BFS</h3>
      <canvas width="350" height="300" id="canvas-bfs" bind:this={canvasBfs} />
      <p>Grafo em texto:</p>
      {#if g}
        <pre>{g.toString()} </pre>
      {/if}
    </div>
  </div>
</div>

<style>
  #select-graph-option {
    margin-bottom: 8px;
  }

  #two-panel {
    display: flex;
    justify-content: space-evenly;
  }

  .canvas-pre {
    /* border: 2px solid green; */
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }

  .canvas-pre h3 {
    text-align: center;
  }

  .canvas-pre canvas {
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 8px;
  }
</style>
