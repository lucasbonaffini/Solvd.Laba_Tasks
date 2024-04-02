// String Arithmetic Operations


// Sum
String.prototype.plus = function (string) {
    
    if (!/^\d+$/.test(this) || !/^\d+$/.test(string) || !Number.isInteger(parseInt(this)) || !Number.isInteger(parseInt(string))) {
        return "Error: Sum requires valid positive integers as input";
    }
    
    let num1 = this.split('').reverse();
    let num2 = string.split('').reverse();
    let result = [];
    let carry = 0;

    for(let i = 0; i < Math.max(num1.length, num2.length); i++) {
        let digit1 = parseInt(num1[i]) || 0;
        let digit2 = parseInt(num2[i]) || 0;
        let sum = digit1 + digit2 + carry;

        result.push(sum % 10)
        carry = sum >= 10 ? 1 : 0;
    }

    if(carry) result.push(carry)

    return result.reverse().join('');
}


// Subtraction
String.prototype.minus = function (string) {

    if (!/^\d+$/.test(this) || !/^\d+$/.test(string) || !Number.isInteger(parseInt(this)) || !Number.isInteger(parseInt(string))) {
        return "Error: Subtraction requires valid positive integers as input";
    } else {
        let num1 = parseInt(this)
        let num2 = parseInt(string)
        
        if (num1 < num2) {
            return "Negative result";
        } else {
            let result = [];
            let borrow = 0;
            
            
            let num1Digits = this.split('').reverse();
            let num2Digits = string.split('').reverse();
            
            for (let i = 0; i < num1Digits.length; i++) {
                let digit1 = parseInt(num1Digits[i]) || 0;
                let digit2 = parseInt(num2Digits[i]) || 0;
      
                if (digit1 < digit2 + borrow) {
                    result.push(10 + digit1 - digit2 - borrow);
                    borrow = 1;
                } else {
                    result.push(digit1 - digit2 - borrow);
                    borrow = 0;
                }
            }
            
            return result.reverse().join('');
        }
    }
};

// Division
String.prototype.divide = function (string) {
    
    if (!/^\d+$/.test(this) || !/^\d+$/.test(string) || !Number.isInteger(parseInt(this)) || !Number.isInteger(parseInt(string))) {
        return "Error: Subtraction requires valid positive integers as input";
    }
    
    let dividend = BigInt(this)
    let divisor = BigInt(string)

    if(divisor === 0n) {
        return "Error: Division by zero error"
    }

    if(dividend % divisor !== 0n) {
        return "Error: Division should only result in an integer value"
    }

    let quotient = "";
    let partialDividend = 0n;

    for(let i = 0; i < this.length; i++) {
        partialDividend = partialDividend * 10n + BigInt(this[i]);
        let currentQuotient = partialDividend / divisor;
        
        if (currentQuotient === 0n && quotient === "") {
            quotient += "";
        } else {
            quotient += currentQuotient.toString();
        }
        
        partialDividend = partialDividend % divisor;
    }
    
    return quotient || "0"; // if the result is an empty string, returns 0
};


//Multiplication
String.prototype.multiply = function (string) {
    
    if (!/^\d+$/.test(this) || !/^\d+$/.test(string) || !Number.isInteger(parseInt(this)) || !Number.isInteger(parseInt(string))) {
        return "Error: Subtraction requires valid positive integers as input";
    }
    
    let num1 = this.split('').reverse();
    let num2 = string.split('').reverse();
    let products = [];
  
    for (let i = 0; i < num1.length; i++) {
        for (let j = 0; j < num2.length; j++) {
            let product = (parseInt(num1[i]) || 0) * (parseInt(num2[j]) || 0);
            products[i + j] = (products[i + j] || 0) + product;
        }
    }
  
    let result = [];
    let carry = 0;
  
    for (let i = 0; i < products.length; i++) {
        let sum = products[i] + carry;
        result.push(sum % 10);
        carry = Math.floor(sum / 10);
    }
  
    while (carry) {
        result.push(carry % 10);
        carry = Math.floor(carry / 10);
    }
  
    return result.reverse().join('');

}

const rand1 = '44444444444444444444000000'
const rand2 = '100000'

console.log("602".plus("1230495"));
console.log("300".minus("10"));
console.log(rand1.divide(rand2));
console.log("8".multiply("4"));