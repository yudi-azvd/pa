import { scheduleIntervals, type Job } from '@/1-greedy/interval-scheduling'
import { describe, expect, it } from 'vitest'

describe('Interval scheduling', () => {
  it('empty jobs', () => {
    const jobs: Job[] = []
    const selected = scheduleIntervals(jobs)
    expect(selected.length).toEqual(0)
  })

  it('1 job', () => {
    const jobs: Job[] = [{ id: 1, start: 1, end: 3 }]
    const selected = scheduleIntervals(jobs)
    expect(selected.length).toEqual(1)
  })

  it('some jobs', () => {
    const jobs: Job[] = [
      { id: 'a', start: 0, end: 6 },
      { id: 'b', start: 1, end: 4 },
      { id: 'c', start: 3, end: 5 },
      { id: 'd', start: 3, end: 8 },
      { id: 'e', start: 4, end: 7 },
      { id: 'f', start: 5, end: 9 },
      { id: 'g', start: 6, end: 10 },
      { id: 'h', start: 8, end: 11 },
    ]
    const selected = scheduleIntervals(jobs)
    expect(selected.length).toEqual(3)

    const expectedSelected = ['b', 'e', 'h']

    const resultSelected = selected.map((s) => s.id)
    expect(resultSelected.sort()).toEqual(expectedSelected.sort())
  })
})
