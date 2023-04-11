<script lang="ts">
  import { onMount } from 'svelte'
  import { base } from '$app/paths'
  import { buildRenderGraphs } from './util'
  import { tinyCG } from '@/0-graphs/samples/tinyCG'
  import { tinyG_PA } from '@/0-graphs/samples/tinyG_PA'
  import type Graph from '@/0-graphs/graph'
  import type { GraphSample } from '@/0-graphs/samples/sample'

  let g: Graph
  let b: Graph

  let canvasOriginal: HTMLCanvasElement
  let contextOriginal: CanvasRenderingContext2D | null

  let canvasBfs: HTMLCanvasElement
  let contextBfs: CanvasRenderingContext2D | null

  const graphOptions: GraphSample[] = [tinyCG, tinyG_PA]

  const DEFAULT_GRAPTH_OPTION = 1
  let graphOptionId = DEFAULT_GRAPTH_OPTION
  let option = graphOptions[DEFAULT_GRAPTH_OPTION]

  onMount(() => {
    contextOriginal = canvasOriginal.getContext('2d')
    contextBfs = canvasBfs.getContext('2d')
    if (contextOriginal && contextBfs) {
      ;({ g, b } = buildRenderGraphs(
        canvasOriginal,
        contextOriginal,
        canvasBfs,
        contextBfs,
        option,
      ))
    }
  })
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
      if (contextOriginal && contextBfs) {
        ;({ g, b } = buildRenderGraphs(
          canvasOriginal,
          contextOriginal,
          canvasBfs,
          contextBfs,
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
      {#if b}
        <pre>{b.toString()} </pre>
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
