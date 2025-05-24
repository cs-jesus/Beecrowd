var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let num1 = parseInt(lines.shift());
    num2 = parseInt(lines.shift());
    PROD = num1 * num2;
    
console.log("PROD = "+PROD);
