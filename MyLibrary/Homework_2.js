
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
      if(typeof value === 'string'){
        const parsedFloat = parseFloat(value);
        if(!isNaN(parsedFloat)) {
          return parsedFloat;
        }
      }else if(typeof value === 'number') {
          return value;
        } else if(typeof value === 'boolean') {
          return value ? 1 : 0;
        }else if(typeof value === 'object') {
          throw new Error('Cannot convert object to number')
        }
        throw new Error(`Cannot convert ${typeof value} to number`)
    },

    coerceToType: function(value, type) {
      switch(type.toLowerCase()){
        
        case 'string':
          return String(value)
        case 'number':
          return this.convertToNumber(value)
        case 'boolean':
          return Boolean(value)
        default:
          throw new Error(`Coercion to ${type} not supported`)
      }
    },

    //Optional: Convert string to title case
    titleCaseString: function(str) {
      if(typeof str === 'string') {
        return str.replace(/\b\w/g, function(char) {
          return char.toUpperCase();
        });
      } else {
        throw new Error('Argument is not a string');
      }
    }



  };

export { AdvanceDataTransf };

