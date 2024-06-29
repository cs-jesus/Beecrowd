var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let seconds = parseInt(lines.shift()),
    h = parseInt(seconds/3600),
    m = parseInt((seconds%3600)/60),
    s = parseInt(seconds%60);
    
console.log(`${h}:${m}:${s}`);
