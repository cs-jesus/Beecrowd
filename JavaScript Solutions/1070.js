var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let num = parseInt(lines.shift()), i=0;

do {
    if(num%2!==0) {
        console.log(num);
        i++;
    }
    num++;
    
} while (i<6)
