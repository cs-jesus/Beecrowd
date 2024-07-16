var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let inputs = parseInt(lines.shift()), value, inInterval=0, outInterval=0;

for (i=0; i<inputs; i++) {
    value = parseInt(lines.shift());
    
    (value >= 10 && value <= 20) ? inInterval++ : outInterval++;
}
console.log(`${inInterval} in\n${outInterval} out`);
