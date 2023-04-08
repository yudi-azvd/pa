class_name BFS

var graph: Graph = null
var visited: Array[int] = []
var edge_to: Array[int] = []
var dist_to: Array[int] = []
# Pra ser parecido com o da aula
var tree: Array[int] = []
var queue: Array[int] = []
var source: int = 0
var visited_counter: int = 0

func _init(g: Graph, _source: int) -> void:
	graph = g

	visited.resize(g.vertices)
	edge_to.resize(g.vertices)
	tree.resize(g.vertices)
	source = _source

	_run_bfs()

func _run_bfs() -> void:
	print('run bfs')
	queue.append(source)
	queue.pop_back()


	visited[source] = visited_counter
	visited_counter += 1
