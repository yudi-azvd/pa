extends GutTest

var g: Graph = null


func after_each() -> void:
	g.free()


func create_graph_from_file(path: String) -> Graph:
	if not FileAccess.file_exists(path):
		var msg = 'Could not open file %s' % path
		fail_test(msg)
		return null

	var file = FileAccess.open(path, FileAccess.READ)
	var vertices: int = file.get_line().to_int()
	var edges: int = file.get_line().to_int()

	var graph = Graph.new(vertices)
	for i in range(edges):
		var vw = file.get_line().split(' ')
		graph.add_edge(int(vw[0]), int(vw[1]))
	file.close()
	return graph


func test_simple():
	g = Graph.new(4)
	assert_eq(0, g.edges)

	g.add_edge(0, 1)
	assert_eq(1, g.edges)

	g.add_edge(0, 2)
	assert_eq(2, g.edges)

	assert_true(g.has_edge(0, 1))
	assert_true(g.has_edge(1, 0))
	assert_true(g.has_edge(0, 2))
	assert_true(g.has_edge(2, 0))

	assert_false(g.has_edge(0, 3))
	assert_false(g.has_edge(2, 3))


## To vendo se gosto dessa implementação
func test_validate_vertex():
	g = Graph.new(4)

	g.add_edge(0, 1)
	g.add_edge(0, 2)

	g.add_edge(-1, 5)

	assert_eq(g.error, g.GraphErr.GRAPH_OUT_OF_BOUNDS)


func test_tinyCG() -> void:
	g = create_graph_from_file('res://data/tinyCG.txt')
	print(g.to_str())
	assert_eq(6, g.vertices)
