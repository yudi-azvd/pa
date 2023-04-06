class_name BFS

var _graph: Graph = null
var _visited: Array[int] = []
var edge_to: Array[int] = []
var dist_to: Array[int] = []
# Pra ser parecido com o da aula
var tree: Array[int] = []

func _init(g: Graph) -> void:
    _graph = g

    _visited.resize(g.vertices)
    edge_to.resize(g.vertices)
    tree.resize(g.vertices)

    _run_bfs()

func _run_bfs() -> void:
    print('run bfs')    