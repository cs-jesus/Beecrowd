var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let R = parseFloat(lines.shift()),
    volume = ((4/3.0) * 3.14159 * Math.pow(R, 3)).toFixed(3);
    
console.log("VOLUME = "+volume);
