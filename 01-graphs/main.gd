extends SceneTree

func _init() -> void:
	print('Hello world!')

	var g = Graph.new(6)
	g.add_edge(0, 2)
	g.add_edge(0, 1)
	g.add_edge(0, 5)
	g.add_edge(1, 0)
	g.add_edge(1, 2)
	g.add_edge(2, 0)
	g.add_edge(2, 1)
	g.add_edge(2, 3)
	g.add_edge(2, 4)
	g.add_edge(3, 5)
	g.add_edge(3, 4)
	g.add_edge(3, 2)
	g.add_edge(4, 3)
	g.add_edge(4, 2)
	g.add_edge(5, 3)
	g.add_edge(5, 0)
	print(g.to_str())

func _finalize() -> void:
	pass
