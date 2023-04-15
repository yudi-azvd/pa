import { hexStrToRgba } from '@/routes/(app)/floodfill/paint'
import { describe, expect, it } from 'vitest'

describe(hexStrToRgba.name, () => {
  it('several colors', () => {
    expect(hexStrToRgba('#ff0000')).toEqual([255, 0, 0, 255])
    expect(hexStrToRgba('#000000')).toEqual([0, 0, 0, 255])
    expect(hexStrToRgba('#ffff00')).toEqual([255, 255, 0, 255])
    expect(hexStrToRgba('#ff00ff')).toEqual([255, 0, 255, 255])
  })
})
