function myJSONParse(jsonString) {
    let index = 0;
    const tokens = tokenize(jsonString);
  
    function tokenize(str) {
      const tokenRegex = /\s*(true|false|null|[\[\]\{\}:,]|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?|"[^"\\\n\r]*")\s*/g;
      let tokens = [];
      let match;
      while (match = tokenRegex.exec(str)) {
        tokens.push(match[1]);
      }
      return tokens;
    }
  
    function parseValue() {
      const token = tokens[index++];
      switch (token) {
        case '{': return parseObject();
        case '[': return parseArray();
        case 'true': return true;
        case 'false': return false;
        case 'null': return null;
        default: 
          if (token[0] === '"') return token.slice(1, -1); // Remove the quotes for strings
          if (!isNaN(token)) return Number(token); // Convert to number
          throw new SyntaxError("Unexpected token: " + token);
      }
    }
  
    function parseObject() {
      let obj = {};
      let token = tokens[index++];
      if (token === '}') return obj; // Empty object
      while (token) {
        if (token[0] !== '"') throw new SyntaxError("Expected string key but found: " + token);
        const key = token.slice(1, -1);
        token = tokens[index++];
        if (token !== ':') throw new SyntaxError("Expected ':' but found: " + token);
        obj[key] = parseValue();
        token = tokens[index++];
        if (token === '}') break;
        if (token !== ',') throw new SyntaxError("Expected ',' but found: " + token);
        token = tokens[index++];
      }
      return obj;
    }
  
    function parseArray() {
      let arr = [];
      let token = tokens[index++];
      if (token === ']') return arr; // Empty array
      while (token) {
        index--; // Step back one token for parseValue
        arr.push(parseValue());
        token = tokens[index++];
        if (token === ']') break;
        if (token !== ',') throw new SyntaxError("Expected ',' but found: " + token);
        token = tokens[index++];
      }
      return arr;
    }
  
    const result = parseValue();
    if (index < tokens.length) throw new SyntaxError("Unexpected token at the end");
    return result;
  }
  
  // Testing the myJSONParse function
  const jsonString = '{"name": "John", "age": 30, "city": "New York", "isStudent": false, "courses": ["Math", "Science"]}';
  const jsonObject = myJSONParse(jsonString);
  console.log(jsonObject); 
  