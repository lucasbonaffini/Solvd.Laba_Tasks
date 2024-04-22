

// * Task 1: Immutability and Pure Functions

// calculateDiscountedPrice

const calculateDiscountedPrice = (products, discountPercentage) => {
    const productsCopy = JSON.parse(JSON.stringify(products))

    const discountedProducts = productsCopy.map(product => {
        const discountedPrice = product.price * (1 - discountPercentage / 100);

        return {...product, discountedPrice}
    });

    return discountedProducts;
}

const products = [{name: "Macbook Air", price: 800},
{name: "Iphone 15 Pro Max", price: 1200},
{name: "Ipad Pro M1", price: 600}]

const discountedPrice = calculateDiscountedPrice(products,10)

console.log(discountedPrice)

// calculateTotalPrice

const calculateTotalPrice = (products) => {

    let totalPrice = 0;

    for(const product of products) {
        totalPrice += product.price;

    }
    return totalPrice;
}

const totalPrice = calculateTotalPrice(products)

console.log(totalPrice)

// -------------------------------

// * Task 2: Function Composition and Point-Free Style

// getFullName

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

const getFullName = person => `${capitalizeFirstLetter(person.firstName)} ${capitalizeFirstLetter(person.lastName)}`


const composedFunction = person => capitalizeFirstLetter(getFullName(person))

const lucas = new Person('lucas', 'bonaffini')

console.log(composedFunction(lucas));

// filterUniqueWords

const tokenize = text => text.match(/\b\w[\w']*\b/g);

const filterUnique = words => [...new Set(words)];

const sortAlphabetically = words => words.sort((a, b) => a.localeCompare(b));

const filterUniqueWords = text => {
  const normalizedWords = tokenize(text).map(word => word.toLowerCase());
  return sortAlphabetically(filterUnique(normalizedWords));
};

const text = "This is a sample text. this sample text has some duplicate words";

console.log(filterUniqueWords(text));


// getAverageGrade

const calculateAverage = numbers => {
    if (numbers.length === 0) {
      return 0;
    }
    
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
  };
  
  const extractGrades = students => students.map(student => student.grades);
  
  const getAverageGrade = students => {
    return students.map(student => ({
      name: student.name,
      average: calculateAverage(student.grades)
    }));
  };

const students = [
    { name: 'Lucas', grades: [80, 90, 70] },
    { name: 'Tim', grades: [85, 88, 92] },
    { name: 'Alex', grades: [90, 85, 80] }
  ];
  console.log(getAverageGrade(students));

// * Task 3: Closures and Higher-Order Functions

// createCounter

function createCounter() {
    let count = 0;

    return function() {
        return ++count;
    }
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());
console.log(counter1());
console.log(counter1()); 


console.log(counter2());
console.log(counter2());

// repeatFunction

function repeatFunction(func, times) {

    return function(...args) {
        if(times < 0) {

            while(true) {
                func(...args)
            }
        } else {

            for (let i = 0; i < times; i++) {
                func(...args)
                
            }
        }
    }
}

function sayHello(name) {
    console.log('Hello, ' + name + '!');
}

const repeatedHello = repeatFunction(sayHello, 4)
repeatedHello('Lucas');

const repeatedHelloIndefinite = repeatFunction(sayHello, -1)

//repeatedHelloIndefinite('Alex')

// * Task 4: Recursion and Tail Call Optimization

//calculateFactorial

function calculateFactorial(n, accumulator = 1) {
    if (n === 0) {
      return accumulator;
    }
    return calculateFactorial(n - 1, n * accumulator);
  }

console.log(calculateFactorial(1000))


// power-function

function power(base, exponent) {

    if(exponent === 0) {
        return 1;
    }

    if(exponent > 0) {
        return base * power(base, exponent - 1)
    }

    return 1 / power(base, -exponent)
}

console.log(power(2, 3));


// * Task 5: Lazy Evaluation and Generators (*do not use yield)

// lazyMap

function lazyMap(array, mappingFunction) {
    let index = 0;
  
    return {
      next: function() {
        if (index < array.length) {
          return { value: mappingFunction(array[index++]), done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const squareGenerator = lazyMap(numbers, x => x ** 2);
  
  console.log(squareGenerator.next().value); 
  console.log(squareGenerator.next().value);
  console.log(squareGenerator.next().value);


// fibonacciGenerator

function fibonacciGenerator() {
    let a = 0, b = 1;
  
    return {
      next: function() {
        const current = a;
        a = b;
        b = current + b;
        return { value: current, done: false };
      }
    };
  }
  
  
  const generator = fibonacciGenerator();
  console.log(generator.next().value);
  console.log(generator.next().value); 
  console.log(generator.next().value);
  console.log(generator.next().value);
  console.log(generator.next().value);
  console.log(generator.next().value);