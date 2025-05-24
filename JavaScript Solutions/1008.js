var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let number = parseInt(lines.shift()),
    hours = parseInt (lines.shift()),
    receives = parseFloat(lines.shift()),
    salary = (hours * receives).toFixed(2);

console.log(`NUMBER = ${number}\nSALARY = U$ ${salary}`);
