var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let A = parseInt(lines[0]),
    B = parseInt(lines[1]),
    C = parseInt(lines[2]),
    MaiorAB = (A+B+Math.abs(A-B))/2,
    MaiorABC = (MaiorAB+C+Math.abs(MaiorAB-C))/2;
    
console.log(MaiorABC+" eh o maior");
