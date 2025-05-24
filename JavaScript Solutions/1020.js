var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let days = parseInt(lines.shift()),
    a = parseInt(days / 365),
    m = parseInt((days % 365)/30),
    d = parseInt((days % 365) % 30);
    
console.log(`${a} ano(s)\n${m} mes(es)\n${d} dia(s)`);
