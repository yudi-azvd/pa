export interface Job {
  id: number | string
  start: number
  end: number
}

export function scheduleIntervals(jobs: Job[]): Job[] {
  jobs.sort((a, b) => a.end - b.end)
  const selected: Job[] = []
  let latestEnd = -Infinity
  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].start >= latestEnd) {
      selected.push(jobs[i])
      latestEnd = jobs[i].end
    }
  }

  return selected
}
