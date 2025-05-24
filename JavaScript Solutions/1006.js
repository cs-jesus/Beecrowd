var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines.shift()),
    B = parseFloat(lines.shift()),
    C = parseFloat(lines.shift()),
    MEDIA = ( ( (A*2) + (B*3) + (C*5) )/10 ).toFixed(1);
    
console.log("MEDIA = "+MEDIA);
