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


class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
}