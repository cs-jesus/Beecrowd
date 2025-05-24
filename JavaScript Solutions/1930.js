var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let T1 = parseInt(lines.shift()),
    T2 = parseInt(lines.shift()),
    T3 = parseInt(lines.shift()),
    T4 = parseInt(lines.shift()),
    total = Number((T1 + T2 + T3 + T4) - 3);
    
console.log(total);
