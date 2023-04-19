import Digraph from '@/0-graphs/digraph'
import { tinyDG } from '@/0-graphs/samples/tinyDG'
import { tinyDG_PA_1 } from '@/0-graphs/samples/tinyDG_PA1'
import { tinyDG_PA_2 } from '@/0-graphs/samples/tinyDG_PA2'
import isStronglyConnected from '@/0-graphs/stronglyconnected'

import { describe, expect, it } from 'vitest'

let g: Digraph

describe('Strongly Connected', () => {
  it.each([
    { sample: tinyDG, connected: false },
    { sample: tinyDG_PA_1, connected: true },
    { sample: tinyDG_PA_2, connected: false },
  ])('digraph $sample.label is connected: $connected', ({ sample, connected }) => {
    g = Digraph.fromString(sample.sample)

    expect(isStronglyConnected(g)).toBe(connected)
  })
})
