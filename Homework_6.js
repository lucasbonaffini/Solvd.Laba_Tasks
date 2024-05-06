//* Task 1: Quasi-Tagged Templates

const translations = {
    en: {
        greet: "Hello",
        intro: "Welcome to our website"
    },
    fr: {
        greet: "Bonjour",
        intro: "Bienvenue sur notre site web"
    }
};

function localize(strings, ...keys) {
    
    const language = "en"; 
    const languageTranslations = translations[language];
    
    
    let result = strings[0];
    keys.forEach((key, index) => {
        result += languageTranslations[key] + strings[index + 1];
    });
    
    return result;
}

const greeting = "greet";
const introduction = "intro";

const localizedGreeting = localize`${greeting}`;
const localizedIntroduction = localize`${introduction}`;

console.log(localizedGreeting);
console.log(localizedIntroduction);

// * Task 2: Advanced Tagged Template

function highlightKeywords(strings, ...keywords) {
    let result = strings;

    keywords.forEach((keyword, i) => {
        const regex = new RegExp(`\\$\\{${i}\\}`, 'g'); // Create RegExp for placeholder
        result = result.replace(regex, `<span class='highlight'>${keyword}</span>`);
    });

    return result;
}


const keywords = ["JavaScript", "template", "tagged"];
const template = "Learn ${0} tagged templates to create custom ${1} literals for ${2} manipulation.";

const highlighted = highlightKeywords(template, ...keywords);
console.log(highlighted);

// * Task 3: Multiline Tagged Template

function multiline(strings, ...values) {
    
    const combined = strings.reduce((acc, str, i) => {
        const value = values[i] || '';
        return acc + str + value;
    }, '');

    
    const lines = combined.split('\n');

    
    const numberedLines = lines.map((line, index) => `${index + 1} ${line}`);

    return numberedLines.join('\n');
}


const code = multiline`
function add(a, b) {
    return a + b;
}
`;

console.log(code);

// * Task 4: Implementing Debounce Function


const inputElement = document.getElementById("search-input");

function debounce(func, delay) {
    let timeoutId;

    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

function debouncedSearch(query) {
    console.log("Searching for:", query);
}

const debouncedSearchHandler = debounce(debouncedSearch, 300);

inputElement.addEventListener("input", event => {
    debouncedSearchHandler(event.target.value);
});


inputElement.value = "query 1";
inputElement.dispatchEvent(new Event('input', { bubbles: true }));

inputElement.value = "query 2";
inputElement.dispatchEvent(new Event('input', { bubbles: true }));

inputElement.value = "query 3";
inputElement.dispatchEvent(new Event('input', { bubbles: true }));


// * Task 5: Implementing Throttle Function

function throttle(func, interval) {
    let lastExecuted = 0;
    let timeoutId;

    return function(...args) {
        const now = Date.now();

        if (now - lastExecuted < interval) {
            // If the interval has not elapsed, ignore the invocation
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
                lastExecuted = now;
            }, interval);
        } else {
            // If the interval has elapsed, execute the function
            func.apply(this, args);
            lastExecuted = now;
        }
    };
}


function onScroll(event) {
    
    console.log("Scroll event:", event);
}

const throttledScrollHandler = throttle(onScroll, 1000);

window.addEventListener("scroll", throttledScrollHandler);


// * Task 6: Currying Function Implementation


function curry(func, arity) {

    const args = [];
    
    return function curried(...newArgs) {
        // Collect new arguments
        args.push(...newArgs);

        // If enough arguments are collected, execute the original function
        if (args.length >= arity) {
            return func(...args);
        } else {
            // If not enough arguments are collected, return a new curried function
            return curried;
        }
    };
}


function multiply(a, b, c) {
    return a * b * c;
}

const curriedMultiply = curry(multiply, 3);

const step1 = curriedMultiply(2); // Returns a curried function
const step2 = step1(3); // Returns a curried function
const result = step2(4); // Returns the final result: 2 * 3 * 4 = 24

console.log("Result:", result); // Expected: 24





