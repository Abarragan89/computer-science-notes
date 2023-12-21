// Graph = Nodes and Connections 
// A tree is a type of graph.  (difference is tree only has one path to nodes, graph can have mulitple routes)
// Used in: Social Networks, Location/Mapping, Routing Algorithms, Visual Hierarchy, File System Optimization, Everywhere!


// Types of graph:
// Undirected Graph ---- connections can go both ways to and from a node, there is no directionality(e.g. friends on facebook) 
// Directed Graph ---- connections are represented with arrows and is one-way (e.g. followers)
// Weighted Graph ---- when values are added to the edges (edges === connections)
// Unweighted Graph ---- no values are added to the edges


// Representation
// graphs can be represented by an Adjacency Matrix or a Adjacency List 
// Adjacency list can be an array or an object with a key and array of values to it's connections
// the list is faster to iterate over all edges and takes up less space
// the matrix takes up more space but can be quicker to get to a specific edge


class Graph {
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    // this is undirected graph so we do this to both vertexes
    addEdge(v1, v2) {
        if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return null;
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)

    }

    removeEdge(v1, v2) {
        // remove v1 from v2
        const indexOfVertex1 = this.adjacencyList[v1].indexOf(v2)
        this.adjacencyList[v1].splice(indexOfVertex1, 1)
        // remove v2 from v1
        const indexOfVertex2 = this.adjacencyList[v2].indexOf(v1)
        this.adjacencyList[v2].splice(indexOfVertex2, 1)
    } 

    // need to remove the vertex and any connections they may have
    removeVertex(vertexRemove) {
        while (this.adjacencyList[vertexRemove].length) {
            const adjacentVertex = this.adjacencyList[vertexRemove].pop();
            this.removeEdge(vertexRemove, adjacentVertex)
        }
        delete this.adjacencyList[vertexRemove];
    }


    // DEPTH FIRST TRAVERSAL
    // follow a branch down (neighbors) before backtracking
    // Recursive Approach (DFT)
    depthFirstRecursive(vertex) {
        const results = [];
        const guestBook = {};
        // Need this variable to use adjacencyList in a sub function due to 
        // the change in the 'this' keyword. 
        const adjacencyList = this.adjacencyList;

        let counter = 0;
        // Recursive function as IFFY
        (function DFSHelper(currentVertex) {
            counter++;
            const currentAdjacentArray = adjacencyList[currentVertex];
            // if return if vertex is empty
            if (currentAdjacentArray.length === 0) return;
            // record entry and push to results
            guestBook[currentVertex] = true
            results.push(currentVertex);
            // recursively call on child if children is not in entry log
            currentAdjacentArray.forEach((nextVertex) => {
                if (!guestBook[nextVertex]) {
                    DFSHelper(nextVertex)
                }
            })
        })(vertex)
        return results;
    }

    // uses a stack to keep track
    depthFirstIterative(vertex) {
        let stack = [];
        const results = [];
        const entryLog = {}
        stack.push(vertex)
        
        while (stack.length) {
            vertex = stack.pop();
            if (!entryLog[vertex]) {
                results.push(vertex);
                entryLog[vertex] = true;
                this.adjacencyList[vertex].forEach((newVertex) => {
                    stack.push(newVertex)
                })
            }
        }
        return results;
    }

    // Breadth First Traversal - go through all the nodes of a parent, 
    // before looking at grandchildren, great grandchildren, etc...

    // uses a queue to keep track
    breathFirstSearch(vertex) {
        const queue = [vertex];
        const results = [];
        const entryLog = {};

        while(queue.length) {
            const currentVertex = queue.shift();
            if (!entryLog[currentVertex]) {
                results.push(currentVertex);
                entryLog[currentVertex] = true;
                this.adjacencyList[currentVertex].forEach((nextVertex) => {
                    queue.push(nextVertex)
                })
            }
        }
        return results;
    }
}



const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');


graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');

console.log(graph.breathFirstSearch('A'));

// console.log(graph)