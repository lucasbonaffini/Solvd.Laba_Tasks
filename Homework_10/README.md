- Documentation

<Constructor:> Initializes the hash table with a specified size and creates buckets.
<hash(key):> Converts a string key into a hash code and maps it to an index within the table size.
<insert(key, value):> Inserts a key-value pair into the hash table. Updates the value if the key already exists.
<get(key):> Retrieves the value associated with the key. Returns undefined if the key is not found.
<delete(key):> Removes the key-value pair from the hash table. Returns true if the key was found and deleted, otherwise false.

- Analysis

Time Complexity:
- <Insertion:> O(1) on average, O(n) in the worst case (when all keys hash to the same index).
- <Retrieval:> O(1) on average, O(n) in the worst case.
- <Deletion:> O(1) on average, O(n) in the worst case.

<Trade-offs:> The separate chaining method is simple and effective but can use more memory due to the linked lists. Ensuring the hash function distributes keys uniformly is crucial to maintain efficient operations.