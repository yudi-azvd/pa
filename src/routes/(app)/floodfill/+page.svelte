<script lang="ts">
  import { onMount } from 'svelte'
  import { base } from '$app/paths'
  import { bucketFillStartingFrom } from './paint'

  let canvas: HTMLCanvasElement
  let context: CanvasRenderingContext2D | null
  let selectedColor = '#8A2BE2'

  /**
   * Carregar imagens no canvas
   * https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images
   */

  // const defaultImage = `${base}/me@512.png`
  const defaultImage = `${base}/fractal.bmp`
  const pagetitle = 'Grafos > Flood Fill'

  let files: FileList

  const onFileChange = (e: Event) => {
    // if (!context) return
    // console.log(e)
    let image = e.target.files[0]
    // console.log(image)

    // // reader.readAsDataURL(image)
    // // reader.onload = e => {
    // //   e.target?.result
    // // }
    // console.log(typeof image)
    // // console.log(files[0])
    // // context.drawImage(image, 0, 0)
  }

  function onCanvasClick(e: MouseEvent) {
    if (!context) return
    const rect = canvas.getBoundingClientRect()
    let x = e.clientX - rect.left
    let y = e.clientY - rect.top
    x = Math.trunc((x * canvas.width) / canvas.clientWidth)
    y = Math.trunc((y * canvas.height) / canvas.clientHeight)

    bucketFillStartingFrom(canvas, context, x, y, selectedColor)
  }

  onMount(() => {
    canvas = document.querySelector('canvas')!
    context = canvas.getContext('2d', { willReadFrequently: true })!
    const image = new Image()
    image.onload = () => {
      if (context) context.drawImage(image, 0, 0)
    }

    image.src = defaultImage
  })
</script>

<svelte:head>
  <title>{pagetitle}</title>
</svelte:head>

<h1>{pagetitle}</h1>

<canvas width="50" height="50" bind:this={canvas} on:click={onCanvasClick} />

<div class="inputs">
  <input type="color" bind:value={selectedColor} />
  <input type="file" on:change={onFileChange} src={defaultImage} bind:files />
</div>

<div class="selected-color">
  <p>Cor selecionada:</p>
  <div style="background: {selectedColor};" />
</div>

<style>
  canvas {
    background: red;
    image-rendering: pixelated;
    image-rendering: crisp-edges;
    image-rendering: -moz-crisp-edges;
  }

  p {
    position: relative;
  }

  .inputs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .selected-color {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .selected-color div {
    width: 16px;
    height: 16px;
  }
</style>
