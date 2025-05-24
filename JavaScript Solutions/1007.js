var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines.shift()),
    B = parseInt(lines.shift()),
    C = parseInt(lines.shift()),
    D = parseInt(lines.shift()),
    dif = ((A*B) - (C*D));
    
console.log("DIFERENCA = "+dif);
