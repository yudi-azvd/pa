// interface Color {
//   r: number
//   g: number
//   b: number
//   a: number
// }

export async function bucketFillStartingFrom(
  x: number,
  y: number,
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  newColor: string,
  fillStrategy: '1' | '2',
) {
  const width = canvas.width
  const height = canvas.height

  const pixel = context.getImageData(x, y, 1, 1).data
  const imageData = context.getImageData(0, 0, width, height)

  const startColorIndex = Math.trunc(y * width * 4 + x * 4)
  // const startColor: Color = {
  //   r: pixel[0],
  //   g: pixel[1],
  //   b: pixel[2],
  //   a: pixel[3],
  // }

  const color = hexStrToRgba(newColor)
  if (fillStrategy === '1') await bfsFill(imageData, pixel, color, startColorIndex, context)
  else dfsFill(imageData, pixel, color, startColorIndex, context)
}

async function bfsFill(
  imageData: ImageData,
  startColor: Uint8ClampedArray,
  fillColor: number[],
  startIndex: number,
  context: CanvasRenderingContext2D,
) {
  if (colorsEqual(startIndex, imageData.data, fillColor)) return

  const width = imageData.width
  const row = width * 4
  const length = imageData.data.length
  /** Fila de índices */
  const queue: number[] = []

  queue.push(startIndex)

  while (queue.length !== 0) {
    const i = queue.shift()!
    if (!isWithinBounds(i, length)) continue

    if (!colorsEqual(i, imageData.data, fillColor)) {
      imageData.data[i + 0] = fillColor[0]
      imageData.data[i + 1] = fillColor[1]
      imageData.data[i + 2] = fillColor[2]
      imageData.data[i + 3] = fillColor[3]
      context.putImageData(imageData, 0, 0)
      await new Promise((r) => setTimeout(r, 1))

      if (isWithinBounds(i + 4, length) && colorsEqual(i + 4, imageData.data, startColor))
        queue.push(i + 4)
      if (isWithinBounds(i - 4, length) && colorsEqual(i - 4, imageData.data, startColor))
        queue.push(i - 4)
      if (isWithinBounds(i + row, length) && colorsEqual(i + row, imageData.data, startColor))
        queue.push(i + row)
      if (isWithinBounds(i - row, length) && colorsEqual(i - row, imageData.data, startColor))
        queue.push(i - row)
    }
  }
}

async function dfsFill(
  imageData: ImageData,
  startColor: Uint8ClampedArray,
  fillColor: number[],
  startIndex: number,
  context: CanvasRenderingContext2D,
) {
  if (colorsEqual(startIndex, imageData.data, fillColor)) return

  const width = imageData.width
  const row = width * 4
  const length = imageData.data.length
  /** Fila de índices */
  const queue: number[] = []

  queue.push(startIndex)

  while (queue.length !== 0) {
    const i = queue.pop()!
    if (!isWithinBounds(i, length)) continue

    if (!colorsEqual(i, imageData.data, fillColor)) {
      imageData.data[i + 0] = fillColor[0]
      imageData.data[i + 1] = fillColor[1]
      imageData.data[i + 2] = fillColor[2]
      imageData.data[i + 3] = fillColor[3]
      context.putImageData(imageData, 0, 0)
      await new Promise((r) => setTimeout(r, 1))

      if (isWithinBounds(i + 4, length) && colorsEqual(i + 4, imageData.data, startColor))
        queue.push(i + 4)
      if (isWithinBounds(i - 4, length) && colorsEqual(i - 4, imageData.data, startColor))
        queue.push(i - 4)
      if (isWithinBounds(i + row, length) && colorsEqual(i + row, imageData.data, startColor))
        queue.push(i + row)
      if (isWithinBounds(i - row, length) && colorsEqual(i - row, imageData.data, startColor))
        queue.push(i - row)
    }
  }
}

function isWithinBounds(n: number, upperLimit: number): boolean {
  return 0 <= n || n <= upperLimit
}

function colorsEqual(
  i: number,
  c1: Uint8ClampedArray | number[],
  c2: Uint8ClampedArray | number[],
): boolean {
  return c1[i + 0] === c2[0] && c1[i + 1] === c2[1] && c1[i + 2] === c2[2] && c1[i + 3] === c2[3]
}

function toColor(i: number, imageData: ImageData) {
  const s = `${imageData.data[i]} ${imageData.data[i + 1]} ${imageData.data[i + 2]} ${
    imageData.data[i + 3]
  }`

  return s
}

export function hexStrToRgba(hex: string): number[] {
  const hexlen = hex.length
  if (hexlen !== 7) throw new Error('Hex string must have 7 digits: #rrggbb. Got ' + hex)

  const rs = hex.slice(1, 3)
  const gs = hex.slice(3, 5)
  const bs = hex.slice(5, 7)

  const r = parseInt(rs, 16)
  const g = parseInt(gs, 16)
  const b = parseInt(bs, 16)

  return [r, g, b, 255]
}
