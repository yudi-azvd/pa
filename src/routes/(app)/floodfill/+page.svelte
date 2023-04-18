<script lang="ts">
  import { onMount } from 'svelte'
  import { base } from '$app/paths'
  import { bucketFillStartingFrom } from './paint'

  let done = true
  let canvas: HTMLCanvasElement
  let context: CanvasRenderingContext2D | null
  let selectedColor = '#8A2BE2'
  let fillStrategy: '1' | '2' = '1'

  /**
   * Carregar imagens no canvas
   * https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images
   */

  const defaultImage = `${base}/van-g-square.png`
  const pagetitle = 'Grafos > Flood Fill'

  const onFileChange = (e: Event) => {
    if (!context) {
      alert('Canvas not ready. Try later.')
    }

    let image = new Image()
    image.onload = () => {
      canvas.height = image.height
      canvas.width = image.width
      context!.drawImage(image, 0, 0)
    }
    image.src = URL.createObjectURL(e.target!.files[0])
  }

  async function onCanvasClick(e: MouseEvent) {
    if (!done) {
      return
    }
    if (!context) return
    const rect = canvas.getBoundingClientRect()
    let x = e.clientX - rect.left
    let y = e.clientY - rect.top
    x = Math.trunc((x * canvas.width) / canvas.clientWidth)
    y = Math.trunc((y * canvas.height) / canvas.clientHeight)

    done = false
    await bucketFillStartingFrom(x, y, canvas, context, selectedColor, fillStrategy)
    done = true
  }

  onMount(() => {
    canvas = document.querySelector('canvas')!
    context = canvas.getContext('2d', { willReadFrequently: true })!
    const image = new Image()
    image.onload = () => {
      if (!context) return
      canvas.height = image.height
      canvas.width = image.width
      context.drawImage(image, 0, 0)
    }

    image.src = defaultImage
  })
</script>

<svelte:head>
  <title>{pagetitle}</title>
</svelte:head>

<h1>{pagetitle}</h1>

<p>Clique em qualquer lugar da imagem e veja a mágica acontecer:</p>

<canvas width="300" height="150" bind:this={canvas} on:click={onCanvasClick} />

{#if done}
  <p>Pronto!</p>
{:else}
  <p>Pintando...</p>
{/if}

<div class="inputs">
  <div>
    <span>Cor selecionada:</span>
    <input type="color" bind:value={selectedColor} />
  </div>
  <input type="file" on:change={onFileChange} src={defaultImage} />
  <select bind:value={fillStrategy}>
    <option value="1">BFS</option>
    <option value="2">DFS</option>
  </select>
</div>

<br />
<hr />

<div>
  <p>Melhorias a serem feitas:</p>

  <ul>
    <li>Adicionar configuração de <em>threshold</em> para detecção de cor</li>
    <li>Permitir que <em>fill</em>s possam ocorrer a partir de vários pontos simultaneamente?</li>
  </ul>
</div>

<style>
  canvas {
    background: red;
    image-rendering: pixelated;
    image-rendering: crisp-edges;
    image-rendering: -moz-crisp-edges;
    max-width: 500px;
  }

  p {
    position: relative;
  }

  .inputs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  hr {
    width: 300px;
  }
</style>
