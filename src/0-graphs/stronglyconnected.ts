import DiBfs from './dibfs'
import type Digraph from './digraph'

/**
 *
 * Essa implemnetação de BFS tá inadequada. Todos os nós
 * são sempre visitados. Tá na nora de fazer a diferenciação
 * de BFS(), BFS(v) BFS(v, w)
 */
export default function isStronglyConnected(g: Digraph): boolean {
  let bfsResult1 = false
  let bfsResult2 = false

  const bfs = new DiBfs(g)
  bfsResult1 = areAllVisited(bfs)
  const bfsR = new DiBfs(g.reversed())
  bfsResult2 = areAllVisited(bfsR)

  return bfsResult1 && bfsResult2
}

function areAllVisited(b: DiBfs): boolean {
  for (let i = 0; i < b.visited.length; i++) {
    if (!b.visited[i]) return false
  }
  return true
}

// export class KosarajuScc {
//   visited: boolean[]
//   ids: number[]

//   constructor(graph: Digraph) {
//     this.visited = new Array(graph.vertices).fill(false)
//     this.ids = new Array(graph.vertices).fill(0)

//     const bfs = new DiBfs(graph)
//   }

//   private areAllVisited(b: DiBfs): boolean {
//     for (let v = 0; v < b.visited.length; v++) {
//       if (!b.visited[v]) return false
//     }
//     return true
//   }
// }
