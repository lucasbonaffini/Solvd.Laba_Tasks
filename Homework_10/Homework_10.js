class CustomHashTable {
    constructor(size = 50) {
      this.size = size;
      this.buckets = new Array(size).fill(null).map(() => []);
    }
  
    // Custom hash function
    hash(key) {
      let hashValue = 0;
      for (let i = 0; i < key.length; i++) {
        hashValue += key.charCodeAt(i) * (i + 1);
      }
      return hashValue % this.size;
    }
  
    // Method to insert a key-value pair
    insert(key, value) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
      for (const pair of bucket) {
        if (pair[0] === key) {
          pair[1] = value; // Update existing key
          return;
        }
      }
      bucket.push([key, value]); // Insert new key-value pair
    }
  
    // Method to retrieve value by key
    get(key) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
      for (const pair of bucket) {
        if (pair[0] === key) {
          return pair[1];
        }
      }
      return undefined; // Key not found
    }
  
    // Method to delete a key-value pair
    delete(key) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1);
          return true;
        }
      }
      return false; // Key not found
    }
  }


  const hashTable = new CustomHashTable();

  // Insert key-value pairs
  hashTable.insert('apple', 1);
  hashTable.insert('banana', 2);
  hashTable.insert('orange', 3);
  
  // Retrieve values by key
  console.log(hashTable.get('apple'));
  console.log(hashTable.get('banana'));
  console.log(hashTable.get('orange'));
  console.log(hashTable.get('grape'));
  
  // Update value
  hashTable.insert('apple', 4);
  console.log(hashTable.get('apple'));

  // Delete key-value pairs
  console.log(hashTable.delete('banana'));
  console.log(hashTable.get('banana'));
  console.log(hashTable.delete('grape'));
  
  // Collision handling test
  hashTable.insert('apple', 5);
  hashTable.insert('elppa', 6);
  console.log(hashTable.get('apple'));
  console.log(hashTable.get('elppa'));
  