// Dijkstra is a hugely influential person in computer science
// Most famous algorithm 
// Searches through a graph
// Uses a 'Priority Queue' and a 'Binary Heap'


class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node: vertex2, weight})
        this.adjacencyList[vertex2].push({node: vertex1, weight})

    }

    
}


const graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("B", "C", 5)
graph.addEdge("A", "C", 2)


const util = require('util')

const inspectOptions = { depth: null, colors: true}

console.log(util.inspect(graph, inspectOptions))
