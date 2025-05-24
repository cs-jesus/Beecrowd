var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let num, cont=0;

for(let i=0; i<5;i++) {
    num = parseInt(lines.shift());
    
    if(num%2===0) cont++; 
}

console.log(cont+" valores pares");
