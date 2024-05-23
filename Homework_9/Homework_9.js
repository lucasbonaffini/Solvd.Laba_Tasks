// * Stack Implementation

class Stack {
    constructor() {
      this.items = [];
    }
  
    // Adds an element to the stack
    push(element) {
      this.items.push(element);
    }
  
    // Removes and returns the top element of the stack
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.pop();
    }
  
    // Returns the top element of the stack without removing it
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[this.items.length - 1];
    }
  
    // Checks if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Returns the size of the stack
    size() {
      return this.items.length;
    }
  }
  

// * Queue Implementation

class Queue {
    constructor() {
      this.items = [];
    }
  
    // Adds an element to the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Removes and returns the front element of the queue
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.shift();
    }
  
    // Returns the front element of the queue without removing it
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[0];
    }
  
    // Checks if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Returns the size of the queue
    size() {
      return this.items.length;
    }
  }

  
// * Binary Tree Implementation

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    // Inserts a node in the binary tree
    insert(value) {
      const newNode = new TreeNode(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this._insertNode(this.root, newNode);
      }
    }
  
    _insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this._insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this._insertNode(node.right, newNode);
        }
      }
    }
  
    // Searches for a node in the binary tree
    search(value) {
      return this._searchNode(this.root, value);
    }
  
    _searchNode(node, value) {
      if (node === null) {
        return false;
      }
      if (value < node.value) {
        return this._searchNode(node.left, value);
      } else if (value > node.value) {
        return this._searchNode(node.right, value);
      } else {
        return true;
      }
    }
  
    // In-order traversal
    inorderTraversal() {
      const result = [];
      this._inorder(this.root, result);
      return result;
    }
  
    _inorder(node, result) {
      if (node !== null) {
        this._inorder(node.left, result);
        result.push(node.value);
        this._inorder(node.right, result);
      }
    }
  
    // Pre-order traversal
    preorderTraversal() {
      const result = [];
      this._preorder(this.root, result);
      return result;
    }
  
    _preorder(node, result) {
      if (node !== null) {
        result.push(node.value);
        this._preorder(node.left, result);
        this._preorder(node.right, result);
      }
    }
  
    // Post-order traversal
    postorderTraversal() {
      const result = [];
      this._postorder(this.root, result);
      return result;
    }
  
    _postorder(node, result) {
      if (node !== null) {
        this._postorder(node.left, result);
        this._postorder(node.right, result);
        result.push(node.value);
      }
    }
  }

  
// * Graph Implementation

class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }
  
    // Adds a vertex to the graph
    addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, []);
      }
    }
  
    // Adds an edge between two vertices
    addEdge(vertex1, vertex2) {
      if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1);
      }
    }
  
    // Depth-First Search (DFS)
    dfs(startingNode) {
      const visited = new Set();
      this._dfsUtil(startingNode, visited);
    }
  
    _dfsUtil(vertex, visited) {
      visited.add(vertex);
      console.log(vertex);
  
      const neighbors = this.adjacencyList.get(vertex);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          this._dfsUtil(neighbor, visited);
        }
      }
    }
  
    // Breadth-First Search (BFS)
    bfs(startingNode) {
      const visited = new Set();
      const queue = [];
  
      visited.add(startingNode);
      queue.push(startingNode);
  
      while (queue.length > 0) {
        const vertex = queue.shift();
        console.log(vertex);
  
        const neighbors = this.adjacencyList.get(vertex);
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
      }
    }
  }
  

// * Linked List Implementation

class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Inserts a node at the end of the linked list
    insert(value) {
      const newNode = new ListNode(value);
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    // Deletes a node with a specific value
    delete(value) {
      if (this.head === null) {
        return;
      }
      if (this.head.value === value) {
        this.head = this.head.next;
        return;
      }
      let current = this.head;
      while (current.next !== null && current.next.value !== value) {
        current = current.next;
      }
      if (current.next !== null) {
        current.next = current.next.next;
      }
    }
  
    // Searches for a node with a specific value
    search(value) {
      let current = this.head;
      while (current !== null) {
        if (current.value === value) {
          return true;
        }
        current = current.next;
      }
      return false;
    }
  }

  
// ! Part 2: Algorithmic Problems

// * Min/Max Stack

class MinMaxStack {
    constructor() {
      this.stack = [];
      this.minStack = [];
      this.maxStack = [];
    }
  
    // Adds an element to the stack
    push(value) {
      this.stack.push(value);
      if (this.minStack.length === 0 || value <= this.getMin()) {
        this.minStack.push(value);
      }
      if (this.maxStack.length === 0 || value >= this.getMax()) {
        this.maxStack.push(value);
      }
    }
  
    // Removes and returns the top element of the stack
    pop() {
      const value = this.stack.pop();
      if (value === this.getMin()) {
        this.minStack.pop();
      }
      if (value === this.getMax()) {
        this.maxStack.pop();
      }
      return value;
    }
  
    // Returns the minimum element in the stack
    getMin() {
      return this.minStack[this.minStack.length - 1];
    }
  
    // Returns the maximum element in the stack
    getMax() {
      return this.maxStack[this.maxStack.length - 1];
    }
  }

// * Binary Search Tree Check

function isBST(node, min = null, max = null) {
    if (node === null) {
      return true;
    }
    if ((min !== null && node.value <= min) || (max !== null && node.value >= max)) {
      return false;
    }
    return isBST(node.left, min, node.value) && isBST(node.right, node.value, max);
  }

  
// * Graph Algorithms: Shortest Path
// Dijkstra's Algorithm

class PriorityQueue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element, priority) {
      const queueElement = { element, priority };
      if (this.isEmpty()) {
        this.items.push(queueElement);
      } else {
        let added = false;
        for (let i = 0; i < this.items.length; i++) {
          if (queueElement.priority < this.items[i].priority) {
            this.items.splice(i, 1, queueElement);
            added = true;
            break;
          }
        }
        if (!added) {
          this.items.push(queueElement);
        }
      }
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.shift().element;
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  function dijkstra(graph, startVertex) {
    const distances = {};
    const previous = {};
    const pq = new PriorityQueue();
  
    for (const vertex of graph.adjacencyList.keys()) {
      distances[vertex] = Infinity;
      previous[vertex] = null;
    }
    distances[startVertex] = 0;
    pq.enqueue(startVertex, 0);
  
    while (!pq.isEmpty()) {
      const currentVertex = pq.dequeue();
      const neighbors = graph.adjacencyList.get(currentVertex);
  
      for (const neighbor of neighbors) {
        const alt = distances[currentVertex] + 1; // Assume all edges have weight 1 for simplicity
        if (alt < distances[neighbor]) {
          distances[neighbor] = alt;
          previous[neighbor] = currentVertex;
          pq.enqueue(neighbor, alt);
        }
      }
    }
    return { distances, previous };
  }
  
// * Breadth-First Search for Shortest Path

function bfsShortestPath(graph, startVertex, endVertex) {
    const queue = [startVertex];
    const visited = new Set();
    const previous = {};
  
    visited.add(startVertex);
  
    while (queue.length > 0) {
      const currentVertex = queue.shift();
  
      if (currentVertex === endVertex) {
        const path = [];
        let current = endVertex;
        while (current !== null) {
          path.unshift(current);
          current = previous[current];
        }
        return path;
      }
  
      const neighbors = graph.adjacencyList.get(currentVertex);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          previous[neighbor] = currentVertex;
          queue.push(neighbor);
        }
      }
    }
    return null; // No path found
  }

// * Linked List Cycle Detection

function hasCycle(head) {
    let slow = head;
    let fast = head;
  
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
  
      if (slow === fast) {
        return true;
      }
    }
    return false;
  }


// ! Part 3: Demonstration

// Stack
const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.pop()); // 20
console.log(stack.peek()); // 10

// Queue
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // 1
console.log(queue.peek()); // 2

// Binary Tree
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
console.log(tree.search(15)); // true
console.log(tree.inorderTraversal()); // [5, 10, 15]

// Graph
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addEdge('A', 'B');
graph.dfs('A'); // A B
graph.bfs('A'); // A B

// Linked List
const linkedList = new LinkedList();
linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);
console.log(linkedList.search(2)); // true
linkedList.delete(2);
console.log(linkedList.search(2)); // false

// Min/Max Stack
const minMaxStack = new MinMaxStack();
minMaxStack.push(1);
minMaxStack.push(2);
minMaxStack.push(0);
console.log(minMaxStack.getMin()); // 0
console.log(minMaxStack.getMax()); // 2
minMaxStack.pop();
console.log(minMaxStack.getMin()); // 1

// Binary Search Tree Check
const bstTree = new BinaryTree();
bstTree.insert(10);
bstTree.insert(5);
bstTree.insert(15);
console.log(isBST(bstTree.root)); // true

// Graph Algorithms: Shortest Path
const shortestPathGraph = new Graph();
shortestPathGraph.addVertex('A');
shortestPathGraph.addVertex('B');
shortestPathGraph.addVertex('C');
shortestPathGraph.addEdge('A', 'B');
shortestPathGraph.addEdge('B', 'C');
shortestPathGraph.addEdge('A', 'C');
console.log(bfsShortestPath(shortestPathGraph, 'A', 'C')); // ['A', 'C']

// Linked List Cycle Detection
const cycleLinkedList = new LinkedList();
const cycleNode1 = new ListNode(1);
const cycleNode2 = new ListNode(2);
const cycleNode3 = new ListNode(3);
cycleLinkedList.head = cycleNode1;
cycleNode1.next = cycleNode2;
cycleNode2.next = cycleNode3;
cycleNode3.next = cycleNode1; // Creates a cycle
console.log(hasCycle(cycleLinkedList.head)); // true



