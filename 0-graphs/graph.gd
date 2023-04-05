class_name Graph
extends Node

class _Node:
	var data: int = 0
	var next: _Node = null
	
	func _init(d: int = 0) -> void:
		data = d

var adj: Array[_Node] = []
var _vertices: int = 0

func _init(vertices: int) -> void:
	_vertices = vertices
	adj.resize(_vertices)
	
func add_edge(v: int, w: int):
	var new_node: _Node = _Node.new(w)
	var curr: _Node = adj[v]
	if curr == null:
		adj[v] = new_node
		return
		
	while curr.next != null:
		curr = curr.next
	curr.next = new_node

func to_str() -> String:
	var result := ''
	var i := 0
	var curr: _Node = null
	for node in adj:
		result += '[%d] -> ' % i
		curr = node
		while curr != null:
			result += '%d ' % curr.data
			curr = curr.next
		result += '\n'
		i += 1
	return result

func free() -> void:
	pass
