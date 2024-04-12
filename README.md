- Homework 1: String Arithmetic Operations
Deadline: April 4th
*Task:*
Your task is to implement arithmetic operations on strings without relying on bigint or arithmetic libraries. You need to create functions that perform arithmetic operations as string functions, considering only positive integers (negative numbers can be avoided, as all numbers will be positive integers).
*Functions to Implement:*
- String.plus(string): This function should take another string as input and return the result of adding the two strings together.
- String.minus(string): This function should take another string as input and return the result of subtracting the second string from the first string. Note that the first parameter will always be greater than the second parameter.
- String.divide(string): This function should take another string as input and return the result of dividing the first string by the second string. Division should only result in an integer value.
- String.multiply(string): This function should take another string as input and return the result of multiplying the two strings together.
*Constraints:*
- All input and output numbers will be positive integers.
- For subtraction, ensure that the first parameter is always greater than the second parameter.
- Division should only result in an integer value.

------------------------------------------------------------------------

- Homework 2
Deadline: 15 April
*Task:*
Create a JavaScript library that provides advanced data transformation functions. The library should include the following features:
- `addValues:` Accepts two arguments of any type and performs the appropriate addition operation based on the types of the arguments. The function should return the result of the addition. If the addition is not possible, it should throw an error.
- `stringifyValue:` Accepts a single argument of any type and converts it to a string representation. For objects and arrays, use JSON.stringify() for serialization. For other types, use the appropriate built-in methods or operations to convert them to strings.
- `invertBoolean:` Accepts a single boolean argument and returns its inverted value. If the argument is not a boolean, it should throw an error.
- `convertToNumber:` Accepts a single argument of any type and attempts to convert it to a number. For strings, use parseFloat() or parseInt() for conversion. For other types, use appropriate operations or functions to perform the conversion. If the conversion is not possible, it should throw an error.
- `coerceToType:` Accepts two arguments: value and type. It attempts to convert the value to the specified type using type coercion. The function should return the coerced value if successful. If the coercion is not possible, it should throw an error.
- (Optional) Implement additional functions of your choice that demonstrate advanced type conversion scenarios or cater to specific use cases related to primitive types. You are encouraged to explore complex scenarios and push the limits of type conversion.

------------------------------------------------------------------------

`Homework 3`
Deadline: 22 April

`Task 1: Immutability and Pure Functions`
- Implement a pure function called calculateDiscountedPrice that takes an array of products and a discount percentage as arguments. The function should return a new array of products with discounted prices based on the given percentage, without modifying the original products.
- Create a pure function called calculateTotalPrice that takes an array of products as an argument. The function should return the total price of all products, without modifying the original array or its items.

`Task 2: Function Composition and Point-Free Style`
- Implement a function called getFullName that takes a person object with firstName and lastName properties. The function should return the person's full name in the format "FirstName LastName".
- Create a function called filterUniqueWords that takes a string of text and returns an array of unique words, sorted in alphabetical order, without using explicit loops. Use function composition and point-free style.
- Implement a function called getAverageGrade that takes an array of student objects, each containing a name and grades property. The function should return the average grade of all students, without modifying the original array or its items. Use function composition and point-free style.

`Task 3: Closures and Higher-Order Functions`
- Create a function called createCounter that returns a closure. The closure should be a counter function that increments the count on each call and returns the updated count. Each closure should have its own independent count.
- Implement a higher-order function called repeatFunction that takes a function and a number as arguments. The function should return a new function that invokes the original function multiple times based on the provided number. If the number is negative, the new function should invoke the original function indefinitely until stopped.

`Task 4: Recursion and Tail Call Optimization`
- Implement a recursive function called calculateFactorial that calculates the factorial of a given number. Optimize the function to use tail call optimization to avoid stack overflow for large input numbers.
- Create a recursive function called power that takes a base and an exponent as arguments. The function should calculate the power of the base to the exponent using recursion.

`Task 5: Lazy Evaluation and Generators (*do not use yield)`
- Implement a lazy evaluation function called lazyMap that takes an array and a mapping function. The function should return a lazy generator that applies the mapping function to each element of the array one at a time.
- Create a lazy generator function called fibonacciGenerator that generates Fibonacci numbers one at a time using lazy evaluation.