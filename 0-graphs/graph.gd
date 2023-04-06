class_name Graph
extends Node

enum GraphErr {
	GRAPH_OK,
	GRAPH_TRUE,
	GRAPH_FALSE,
	GRAPH_OUT_OF_BOUNDS,
}

class _Node:
	var data: int = 0
	var next: _Node = null

	static func create(d: int, _next: _Node = null) -> _Node:
		var node: _Node = _Node.new()
		node.data = d
		node.next = _next
		return node


var adj: Array[_Node] = []
var vertices: int = 0
var edges: int = 0
var error: GraphErr = GraphErr.GRAPH_OK

func _init(v: int) -> void:
	vertices = v
	adj.resize(vertices)


func _validate_vertex(v: int) -> void:
	if v < 0 or v >= vertices:
		push_error('Vertex ', v, ' out of bounds')
		error = GraphErr.GRAPH_OUT_OF_BOUNDS


## Não checa vértices repetidos.
func add_edge(v: int, w: int) -> void:
	_validate_vertex(v)
	_validate_vertex(w)

	if error == GraphErr.GRAPH_OUT_OF_BOUNDS:
		return

	edges += 1
	adj[v] = _Node.create(w, adj[v])
	adj[w] = _Node.create(v, adj[w])


func adj_to(v: int) -> int:
	if v >= vertices:
		return -1

	var curr: _Node = adj[v]
	var total: int = 0
	while curr != null:
		total += 1
		curr = curr.next
	return total


func has_edge(v: int, w: int) -> bool:
	if v >= vertices or w >= vertices:
		push_error(
			"Vertex V=%d or W=%d out of bounds for adjacency list (len=%d)" \
			% [v, w, adj.size()]
		)
		print_stack()
		return false

	var curr: _Node = adj[v]
	while curr != null:
		if w == curr.data:
			return true
		curr = curr.next
	return false


func to_str() -> String:
	var result: String = ""
	var i: int = 0
	var curr: _Node = null
	for node in adj:
		result += "%d: " % i
		curr = node
		while curr != null:
			result += "%d " % curr.data
			curr = curr.next
		result += "\n"
		i += 1
	return result
