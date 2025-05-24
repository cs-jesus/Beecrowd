var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines.shift()),
    B = parseInt(lines.shift()),
    X: number = A + B;

console.log("X = "+X);
