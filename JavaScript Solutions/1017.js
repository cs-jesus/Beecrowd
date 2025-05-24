var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let hours = parseInt(lines.shift()),
    speed = parseInt(lines.shift()),
    fuel = ((hours*speed)/12).toFixed(3);
    
console.log(fuel);
