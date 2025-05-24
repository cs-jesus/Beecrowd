var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let num1 = parseInt(lines.shift()),
    num2 = parseInt(lines.shift()),
    sum = num1 + num2;
    
console.log("X = "+sum);
