extends GutTest


var g: Graph = null


func after_each() -> void:
	g.free()


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
	g = Graph.from_file('res://data/tinyCG.txt')
	assert_eq(6, g.vertices)
