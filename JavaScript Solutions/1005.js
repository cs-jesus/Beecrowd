var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines.shift()),
    B = parseFloat(lines.shift()),
    MEDIA = ( ((A*3.5)+(B*7.5))/11 ).toFixed(5);
    
console.log("MEDIA = "+MEDIA);
