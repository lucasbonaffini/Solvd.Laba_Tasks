//* Task 1: Object Property Manipulation

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com"
};

// Implement the updateInfo method
person.updateInfo = function(info) {
    
    Object.keys(info).forEach(key => {
        
        if (this.hasOwnProperty(key) && Object.getOwnPropertyDescriptor(this, key).writable) {
            
            this[key] = info[key];
        }
    });
};

// Test the updateInfo method
//person.updateInfo({ firstName: "Jane", age: 32 })


console.log(person.firstName) // Output: 'Jane'

Object.defineProperty(person, 'address', {
    value: {},
    writable: true,
    enumerable: false,
    configurable: false
})

// *Task 2: Object Property Enumeration and Deletion

const product = {
    name: "Laptop",
    price: 1000,
    quantity: 5,
    brand: 'Apple'
}

console.log(product); // Output: { name: "Laptop", price: 1000, quantity: 5 }

Object.defineProperty(product, 'price', {
    enumerable: false,
    writable: false
})

Object.defineProperty(product, 'brand', {
    configurable: false
})


Object.defineProperty(product, 'quantity', {
    enumerable: false,
    writable: false 
})

const getTotalPrice = (product) => {
    const priceDescriptor = Object.getOwnPropertyDescriptor(product, 'price');
    const quantityDescriptor = Object.getOwnPropertyDescriptor(product,'quantity');

    if(!priceDescriptor || !quantityDescriptor) {
        throw new Error('Cannot calculate total price. Required properties are missing')
    }

    return priceDescriptor.value * quantityDescriptor.value
}

console.log(getTotalPrice(product));

const deleteNonConfigurable = (obj, propertyName) => {
    const propertyDescriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

    if(!propertyDescriptor) {
        throw new Error(`Property '${propertyName}' does not exist.`)
    }

    if(!propertyDescriptor.configurable) {
        throw new Error(`Cannot delete non-configurable property '${propertyName}'.`)
    }

    delete obj[propertyName];
}

try {
    deleteNonConfigurable(product, 'brand');
} catch (error) {
    console.error(error.message);
}

// * Task 3: Object Property Getters and Setters

const bankAccount = {
    _balance: 1000,

    get formattedBalance() {
        return `$${this._balance}`;
    },

    set balance(newBalance) {
        this._balance = newBalance;
    },

    transfer(targetAccount, amount) {
        if (this._balance < amount) {
            console.log('Insufficient funds for transfer');
            return;
        }

        this._balance -= amount;
        targetAccount.balance = targetAccount._balance + amount;

        console.log(`Transferred $${amount} to ${targetAccount.formattedBalance}`);
    }
};

const targetAccount = {
    _balance: 20000,

    get formattedBalance() {
        return `$${this._balance}`;
    },

    set balance(newBalance) {
        this._balance = newBalance;
    }
};

console.log('Before transfer:');
console.log('Source Account: ', bankAccount.formattedBalance);
console.log('Target Account: ', targetAccount.formattedBalance);

bankAccount.transfer(targetAccount, 500);

console.log('After transfer:');
console.log('Source Account: ', bankAccount.formattedBalance);
console.log('Target Account: ', targetAccount.formattedBalance);


// * Task 4: Advanced Property Descriptors

function deepClone(obj) {

    const newObj = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        // Verificamos si la propiedad es un objeto anidado
        if (typeof obj[key] === 'object' && obj[key] !== null) {

            newObj[key] = deepClone(obj[key]);
        } else {
            
            newObj[key] = obj[key];
        }
    }

    return newObj;
}

function createImmutableObject(obj) {
    const immutableObj = {};

    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            
            immutableObj[key] = Array.isArray(obj[key]) ? obj[key].slice() : deepClone(obj[key]);
         
            Object.defineProperty(immutableObj[key], 'length', { writable: false });
        } else {
        
            Object.defineProperty(immutableObj, key, {
                value: obj[key],
                writable: false,
                enumerable: true,
                configurable: false
            });
        }
    });

    return immutableObj;
}

const originalObject = {
    name: "Example Object",
    details: {
        numbers: [1, 2, 3]
    }
};

const immutableObject = createImmutableObject(originalObject);
console.log(immutableObject);

immutableObject.name = "Changed Name"; 
console.log(immutableObject);

immutableObject.details.numbers[0] = 10; 
console.log(immutableObject.details.numbers);











// * Task 5: Object Observation

function observeObject(obj, callback) {
    return new Proxy(obj, {
        get(target, property, receiver) {
            callback(property, 'get');
            return Reflect.get(target, property, receiver);
        },
        set(target, property, value, receiver) {
            callback(property, 'set');
            return Reflect.set(target, property, value, receiver);
        }
    });
}


const observedPerson = observeObject(person, (property, action) => {
    console.log(`Property '${property}' ${action === 'get' ? 'accessed' : 'modified'}`);
});


console.log(observedPerson.firstName);

console.log(observedPerson.lastName);

observedPerson.age = 35;

// * Task 6: Object Deep Cloning

function deepCloneObject(obj, visited = new WeakMap()) {
    // Check if obj is a primitive type or null
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (visited.has(obj)) {
        return visited.get(obj);
    }

    const clone = Array.isArray(obj) ? [] : {};

    visited.set(obj, clone);

    for (let key in obj) {

        clone[key] = deepCloneObject(obj[key], visited);
    }

    return clone;
}

const obj = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    },
    hobbies: ['reading', 'running']
};

// Add circular reference
obj.self = obj;

const clonedObj = deepCloneObject(obj);
console.log(clonedObj);

// * Task 7: Object Property Validation

const userSchema = {
    type: 'object',
    properties: {
        name: { type: 'string', minLength: 1 },
        email: { type: 'string', format: 'email' },
        age: { type: 'number', minimum: 18 }
    },
    required: ['name', 'email', 'age']
};

const user = {
    name: 'John Doe',
    email: 'john@doe.com',
    age: 25
};

const validateObject = (obj, schema) => {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }

    for (let propName in schema.properties) {
        if (schema.properties[propName].required && !(propName in obj)) {
            return false;
        }

        if (typeof obj[propName] !== schema.properties[propName].type) {
            return false;
        }
        
        if (propName === 'email' && schema.properties[propName].format === 'email' && !isValidEmail(obj[propName])) {
            return 'the email is not in the correct format';
        }

        if (propName === 'age' && obj[propName] < schema.properties[propName].minimum) {
            return 'age should be above 18';
        }
    }

    return true;
}

const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const validationResult = validateObject(user, userSchema);

if(validationResult === true) {
    console.log('User is valid')
} else {
    console.log('User is not valid: ', validationResult);
}