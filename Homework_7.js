
// * Task 1: Implement promiseAll Function

function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;

        if (promises.length === 0) {
            resolve(results);
            return;
        }

        promises.forEach((promise, index) => {
            promise.then(result => {
                results[index] = result;
                completed++;

                if (completed === promises.length) {
                    resolve(results);
                }
            }).catch(reject);
        });
    });
}

// Example usage:
const promises = [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
];

promiseAll(promises)
  .then(results => {
    console.log("All promises resolved:", results); // Expected: [1, 2, 3]
  })
  .catch(error => {
    console.error("At least one promise rejected:", error);
  });

// * Task 2: Implement promiseAllSettled Function

function promiseAllSettled(promises) {
    return new Promise(resolve => {
        const results = [];
        let settledCount = 0;

        if (promises.length === 0) {
            resolve(results);
            return;
        }

        promises.forEach((promise, index) => {
            promise.then(value => {
                results[index] = { status: 'fulfilled', value };
                settledCount++;

                if (settledCount === promises.length) {
                    resolve(results);
                }
            }).catch(reason => {
                results[index] = { status: 'rejected', reason };
                settledCount++;

                if (settledCount === promises.length) {
                    resolve(results);
                }
            });
        });
    });
}

// Example usage:
const promises1 = [
    Promise.resolve(1),
    Promise.reject("Error occurred"),
    Promise.resolve(3)
];

promiseAllSettled(promises1)
    .then(results => {
        console.log("All promises settled:", results);
        // Expected: [{ status: 'fulfilled', value: 1 },
        //            { status: 'rejected', reason: 'Error occurred' },
        //            { status: 'fulfilled', value: 3 }]
    });


// * Task 3: Implement Chaining of Promises as a Separate Function

  function chainPromises(functionsArray) {
    return functionsArray.reduce((promiseChain, currentFunction) => {
        return promiseChain.then(result => {
            return currentFunction(result);
        });
    }, Promise.resolve());
}

// Example usage:
function asyncFunction1() {
    return Promise.resolve("Result from asyncFunction1");
}

function asyncFunction2(data) {
    return Promise.resolve(data + " - Result from asyncFunction2");
}

function asyncFunction3(data) {
    return Promise.resolve(data + " - Result from asyncFunction3");
}

const functionsArray = [asyncFunction1, asyncFunction2, asyncFunction3];

chainPromises(functionsArray)
    .then(result => {
        console.log("Chained promise result:", result);
        // Expected: "Result from asyncFunction1 - Result from asyncFunction2 - Result from asyncFunction3"
    })
    .catch(error => {
        console.error("Chained promise error:", error);
    });


    // * Task 4: Implement promisify Function

    function promisify(fn) {
        return function(...args) {
            return new Promise((resolve, reject) => {
                fn(...args, (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                });
            });
        };
    }
    
    // Example usage:
    function callbackStyleFunction(value, callback) {
        setTimeout(() => {
            if (value > 0) {
                callback(null, value * 2);
            } else {
                callback("Invalid value", null);
            }
        }, 1000);
    }
    
    const promisedFunction = promisify(callbackStyleFunction);
    
    promisedFunction(3)
        .then(result => {
            console.log("Promised function result:", result); // Expected: 6
        })
        .catch(error => {
            console.error("Promised function error:", error);
        });
    