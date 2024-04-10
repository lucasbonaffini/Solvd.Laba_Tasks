
const AdvanceDataTransf = {
    addValues: function(a, b) {
      if(typeof a === 'number' && typeof b === 'number') {
          return a + b;
      }
      else if(typeof a === 'string' && typeof b === 'string') {
          return a + b;
      }
      else if(Array.isArray(a) && Array.isArray(b)) {
          return a.concat(b);
      }
      else {
          throw new Error('Addition not possible for the given types.')
      }
    },

    stringifyValue: function(value) {
        if (typeof value === 'object' || Array.isArray(value)) {
          return JSON.stringify(value);
        } else {
          return String(value);
        }
      },

    
    invertBoolean: function(value) {
        if(typeof value !== 'boolean') {
            throw new Error('The value must be a boolean')
        }else {
            return !value;
        }
    },

    convertToNumber: function(value) {
        if(typeof value === 'string') {
            return parseFloat(value)
        }
    }

  };

export { AdvanceDataTransf };

