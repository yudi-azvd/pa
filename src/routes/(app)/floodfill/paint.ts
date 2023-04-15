interface Color {
  r: number
  g: number
  b: number
  a: number
}

export function bucketFillStartingFrom(
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  newColor: string,
) {
  const width = canvas.width
  const height = canvas.height

  const pixel = context.getImageData(x, y, 1, 1).data
  const imageData = context.getImageData(0, 0, width, height)

  const startColorIndex = Math.trunc(y * width * 4 + x * 4)
  const startColor: Color = {
    r: pixel[0],
    g: pixel[1],
    b: pixel[2],
    a: pixel[3],
  }

  const color = hexStrToRgba(newColor)

  // imageData.data[startColorIndex + 0] = color[0]
  // imageData.data[startColorIndex + 1] = color[1]
  // imageData.data[startColorIndex + 2] = color[2]
  // imageData.data[startColorIndex + 3] = color[3]

  bfsFill(imageData, pixel, color, startColorIndex, context)
  // context.putImageData(imageData, 0, 0)
}

function bfsFill(
  imageData: ImageData,
  startColor: Uint8ClampedArray,
  fillColor: number[],
  startIndex: number,
  context: CanvasRenderingContext2D,
) {
  if (colorsEqual(startIndex, imageData.data, fillColor)) return

  const width = imageData.width
  const length = imageData.data.length
  /** Fila de índices */
  const queue: number[] = []

  // console.log(imageData.data[startIndex + 0])
  // console.log(imageData.data[startIndex + 1])
  // console.log(imageData.data[startIndex + 2])
  // console.log(imageData.data[startIndex + 3])
  console.log({ width })

  queue.push(startIndex)
  // if (isWithinBounds(startIndex, length)) queue.push(startIndex)

  while (queue.length !== 0) {
    const i = queue.shift()!
    // console.log({ i })
    // console.log(toColor(i, imageData), startColor)

    //   console.log('visitando i', i)
    if (!isWithinBounds(i, length)) continue

    if (!colorsEqual(i, imageData.data, fillColor)) {
      imageData.data[i + 0] = fillColor[0]
      imageData.data[i + 1] = fillColor[1]
      imageData.data[i + 2] = fillColor[2]
      imageData.data[i + 3] = fillColor[3]
      context.putImageData(imageData, 0, 0)

      imageData.data[i - width + 0] = 255
      imageData.data[i - width + 1] = 255
      imageData.data[i - width + 2] = 255
      imageData.data[i - width + 3] = 255
      context.putImageData(imageData, 0, 0)
      return
      // if (isWithinBounds(i + 4, length) && colorsEqual(i + 4, imageData.data, startColor))
      //   queue.push(i + 4)
      // if (isWithinBounds(i - 4, length) && colorsEqual(i - 4, imageData.data, startColor))
      //   queue.push(i - 4)
      // if (isWithinBounds(i + width, length) && colorsEqual(i + width, imageData.data, startColor))
      //   queue.push(i + width)
      // if (isWithinBounds(i - width, length) && colorsEqual(i - width, imageData.data, startColor))
      //   queue.push(i - width)
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
