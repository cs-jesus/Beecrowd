var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let km = parseInt(lines.shift()),
    minutes = km*2;
    
console.log(minutes+" minutos");
