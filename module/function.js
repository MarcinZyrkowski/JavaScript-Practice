// A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

// Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

// The parentheses may include parameter names separated by commas:
// (parameter1, parameter2, ...)

// syntax
function name(parameter1, parameter2, parameter3) {
    // code to be executed
  }

// example
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}
  
let value = toCelsius(70); 
console.log(value);