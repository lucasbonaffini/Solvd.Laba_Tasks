// String Arithmetic Operations


// Sum
String.prototype.plus = function (string) {
    
    let x = +this
    let y = +string

    if(isNaN(x) || isNaN(y) || x < 0 || y < 0 || !Number.isInteger(x) || !Number.isInteger(y)) {
        return "Error: Sum requires valid positive integers as input"
    }
    return x + y;
}

// Subtraction
String.prototype.minus = function (string) {
    
    let x = +this
    let y = +string

    if(isNaN(x) || isNaN(y) || x < 0 || y < 0 || !Number.isInteger(x) || !Number.isInteger(y)) {
        return "Error: Subtraction requires valid positive integers as input";
    }else if(x < y) {
        return "Negative result"
    }else {
        return  x - y;
    }

}

// Division
String.prototype.divide = function (string) {
    
    let x = +this
    let y = +string
    
    if(isNaN(x) || isNaN(y) || x < 0 || y < 0 || !Number.isInteger(x) || !Number.isInteger(y)) {
        return "Error: Division requires valid positive integers as input"
    }
    else if(x === 0 || y === 0) {
        return "Division by zero error"
    }else if (x % y !== 0) {
        return "Division should only result in an integer value"
    }else {
        return x / y;
    }
}

//Multiplication
String.prototype.multiply = function (string) {
    
    let x = +this
    let y = +string

    if(isNaN(x) || isNaN(y) || x < 0 || y < 0 || !Number.isInteger(x) || !Number.isInteger(y)) {
        return "Error: Multiplication requires valid positive integers as input"
    }
    return x * y;
}


console.log("1.10".plus("10"));
console.log("-15".minus("10"));
console.log("10".divide("2"));
console.log("8".multiply("4"));