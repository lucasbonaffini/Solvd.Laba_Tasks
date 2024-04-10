import { AdvanceDataTransf } from './Homework_2.js';

try {
    console.log(AdvanceDataTransf.addValues(5, 10));
    console.log(AdvanceDataTransf.addValues('Hello', 'World'));
    console.log(AdvanceDataTransf.addValues([1, 2, 3], [4, 5, 6])); 
    

    const stringValue = AdvanceDataTransf.stringifyValue(1);
    if (typeof stringValue === 'string') {
        console.log('stringifyValue result:', stringValue);
    } else {
        throw new Error('stringifyValue did not return a string');
    }

    console.log(AdvanceDataTransf.invertBoolean('false'));
   
} catch (error) {
    console.error(error.message);
}


  
