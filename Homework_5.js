// * Task 1: Advanced Array Filtering

function customFilterUnique(array, callback) {
    const uniqueArray = [];
    const uniqueKeys = [];
    
    array.forEach(item => {
        const key = callback(item);
        if (!uniqueKeys.includes(key)) {
            uniqueKeys.push(key);
            uniqueArray.push(item);
        }
    });
    
    return uniqueArray;
}

// Example 
const array = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 1, name: 'John' },
    { id: 3, name: 'Bob' }
];

const uniqueObjects = customFilterUnique(array, obj => obj.id);
console.log(uniqueObjects);

// * Task 2: Array Chunking

function chunkArray(array, chunkSize) {
    const chunks = [];
    let index = 0;

    while (index < array.length) {
        chunks.push(array.slice(index, index + chunkSize));
        index += chunkSize;
    }

    return chunks;
}

// Example
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkedArray = chunkArray(arr, 3);
console.log(chunkedArray);

// * Task 3: Array Shuffling

function customShuffle(array) {
    const newArray = array.slice(); // Create a copy of the original array
    
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Generate a random index from 0 to i
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements at i and j
    }
    
    return newArray;
}

// Example 
const example = [1, 2, 3, 4, 5];
const shuffledArray = customShuffle(example);
console.log(shuffledArray);


// * Task 4: Array Intersection and Union

// Function to get the intersection of two arrays
function getArrayIntersection(array1, array2) {
    const intersection = [];
    
    
    for (const element of array1) {
        
        if (array2.includes(element) && !intersection.includes(element)) {
            intersection.push(element);
        }
    }
    
    return intersection;
}

// Function to get the union of two arrays
function getArrayUnion(array1, array2) {
    const union = [];
    
    
    const concatenatedArray = [...new Set([...array1, ...array2])];
    
    
    for (const element of concatenatedArray) {
        union.push(element);
    }
    
    return union;
}

// Example
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

const intersection = getArrayIntersection(array1, array2);
console.log("Intersection:", intersection);

const union = getArrayUnion(array1, array2);
console.log("Union:", union);

// * Task 5: Array Performance Analysis


// Function to measure performance of a provided function with an array
function measureArrayPerformance(func, array) {
    const startTime = performance.now();
    func(array);
    const endTime = performance.now();
    return endTime - startTime; // Return the execution time in milliseconds
}

// Example

function customMap(array) {
    return array.map(x => x * 2); // Double each element
}


const array3 = Array.from({ length: 1000000 }, (_, index) => index + 1);

// Measure performance of customMap function
const customMapTime = measureArrayPerformance(customMap, array3);
console.log("Custom Map Performance:", customMapTime, "milliseconds");

// Measure performance of built-in map method
const builtInMapTime = measureArrayPerformance(arr => arr.map(x => x * 2), array3);
console.log("Built-in Map Performance:", builtInMapTime, "milliseconds");

