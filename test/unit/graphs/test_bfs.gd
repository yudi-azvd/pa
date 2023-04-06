extends GutTest

var g: Graph = null


func after_each() -> void:
	g.free()


func test_tinyCG() -> void:
	g = Graph.from_file('res://data/tinyCG.txt')
	assert_eq(6, g.vertices)
