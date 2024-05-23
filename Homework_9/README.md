*Part 4: Documentation*

`Stack`
* Purpose: Last-in, first-out (LIFO) data structure.
* Methods:
    push(element): Adds an element to the top of the stack.
    pop(): Removes and returns the top element of the stack.
    peek(): Returns the top element without removing it.
    isEmpty(): Checks if the stack is empty.
    size(): Returns the number of elements in the stack.

`Queue`
* Purpose: First-in, first-out (FIFO) data structure.
* Methods:
    enqueue(element): Adds an element to the end of the queue.
    dequeue(): Removes and returns the front element of the queue.
    peek(): Returns the front element without removing it.
    isEmpty(): Checks if the queue is empty.
    size(): Returns the number of elements in the queue.

`Binary Tree`
* Purpose: Hierarchical data structure.
* Methods:
    insert(value): Inserts a node with the given value.
    search(value): Searches for a node with the given value.
    inorderTraversal(): Returns an array of values in in-order traversal.
    preorderTraversal(): Returns an array of values in pre-order traversal.
    postorderTraversal(): Returns an array of values in post-order traversal.

`Graph`
* Purpose: Represents connections between nodes (vertices).
* Methods:
    addVertex(vertex): Adds a vertex to the graph.
    addEdge(vertex1, vertex2): Adds an edge between two vertices.
    dfs(startingNode): Performs depth-first search.
    bfs(startingNode): Performs breadth-first search.

`Linked List`
* Purpose: Linear collection of nodes where each node points to the next node.
* Methods:
    insert(value): Inserts a node with the given value at the end.
    delete(value): Deletes the first node with the given value.
    search(value): Searches for a node with the given value.

`Min/Max Stack`
* Purpose: Stack that supports constant-time retrieval of the minimum and maximum elements.
* Methods:
    push(value): Adds an element to the stack.
    pop(): Removes and returns the top element.
    getMin(): Returns the minimum element.
    getMax(): Returns the maximum element.

`Binary Search Tree Check`
* Purpose: Check if a binary tree is a binary search tree.
* Function:
    isBST(node, min, max): Recursively checks if the tree satisfies the BST property.

`Graph Algorithms: Shortest Path`
* Purpose: Find the shortest path between vertices.
* Functions:
    dijkstra(graph, startVertex): Finds the shortest paths using Dijkstra's algorithm.
    bfsShortestPath(graph, startVertex, endVertex): Finds the shortest path using BFS.

`Linked List Cycle Detection`
* Purpose: Detect if a linked list has a cycle.
* Function:
    hasCycle(head): Uses Floyd's Cycle Detection Algorithm to check for cycles.