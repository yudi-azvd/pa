<script lang="ts">
  import { onMount } from 'svelte'
  import { base } from '$app/paths'
  import { buildRenderGraphs } from './canvas'
  import { tinyCG } from '@/0-graphs/samples/tinyCG'
  import { tinyG_PA } from '@/0-graphs/samples/tinyG_PA'
  import type Graph from '@/0-graphs/graph'
  import type { GraphSample } from '@/0-graphs/samples/sample'
  import { tinyG } from '@/0-graphs/samples/tinyG'

  let g: Graph
  let b: Graph
  let d: Graph

  let canvasOriginal: HTMLCanvasElement
  let contextOriginal: CanvasRenderingContext2D | null

  let canvasBfs: HTMLCanvasElement
  let contextBfs: CanvasRenderingContext2D | null

  let canvasDfs: HTMLCanvasElement
  let contextDfs: CanvasRenderingContext2D | null

  const graphOptions: GraphSample[] = [tinyCG, tinyG_PA, tinyG]

  const DEFAULT_GRAPTH_OPTION = 2
  let graphOptionId = DEFAULT_GRAPTH_OPTION
  let option = graphOptions[DEFAULT_GRAPTH_OPTION]

  onMount(() => {
    contextOriginal = canvasOriginal.getContext('2d')
    contextBfs = canvasBfs.getContext('2d')
    contextDfs = canvasDfs.getContext('2d')
    if (contextOriginal && contextBfs && contextDfs) {
      ;({ g, b, d } = buildRenderGraphs(
        canvasOriginal,
        contextOriginal,
        canvasBfs,
        contextBfs,
        canvasDfs,
        contextDfs,
        option,
      ))
    }
  })
</script>

<svelte:head>
  <title>Grafos > BFS</title>
</svelte:head>

<h1>Grafos > BFS</h1>

<select
  id="select-graph-option"
  value={graphOptionId}
  on:change={(ev) => {
    graphOptionId = Number(ev.currentTarget.value)
    option = graphOptions[graphOptionId]
    if (contextOriginal && contextBfs && contextDfs) {
      ;({ g, b, d } = buildRenderGraphs(
        canvasOriginal,
        contextOriginal,
        canvasBfs,
        contextBfs,
        canvasDfs,
        contextDfs,
        option,
      ))
    }
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
    <canvas width="300" height="300" id="canvas-original" bind:this={canvasOriginal} />
    <p>Grafo original em texto:</p>

    {#if g}
      <pre>{g.toString()} </pre>
    {/if}
  </div>

  <div class="canvas-pre">
    <h3>BFS</h3>
    <canvas width="300" height="300" id="canvas-bfs" bind:this={canvasBfs} />
    <p>Grafo BFS em texto:</p>
    {#if b}
      <pre>{b.toString()} </pre>
    {/if}
  </div>

  <div class="canvas-pre">
    <h3>DFS</h3>
    <canvas width="300" height="300" id="canvas-bfs" bind:this={canvasDfs} />
    <p>Grafo DFS em texto:</p>
    {#if d}
      <pre>{d.toString()} </pre>
    {/if}
  </div>
</div>

<style>
  #select-graph-option {
    margin-bottom: 8px;
  }

  #two-panel {
    max-width: 1280px;
    display: flex !important;
    justify-content: space-between !important;
  }

  .canvas-pre {
    /* border: 2px solid green; */
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .canvas-pre h3 {
    text-align: center;
  }
</style>
