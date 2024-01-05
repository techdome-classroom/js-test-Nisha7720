/**
 * @param {string} s
 * @return {boolean}
 */
//var isValid = function(s) {
    
//};

//module.exports = { isValid };


function isValidParentheses(input) {
    const stack = [];
    const parenthesesMap = { '(': ')', '[': ']', '{': '}' };
  
    for (let char of input) {
      if (char in parenthesesMap) {
        stack.push(char);
      } else if (Object.values(parenthesesMap).includes(char)) {
        if (char !== parenthesesMap[stack.pop()]) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  
  // Example usage:
  const userInput = prompt('Enter a string with parentheses:');
  const result = isValidParentheses(userInput);
  
  console.log(result);

  