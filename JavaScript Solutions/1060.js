var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let num, cont=0;

for(let i=0; i<6; i++) {
    num = parseFloat(lines.shift());
    
    if(num>0) 
        cont++;
}

console.log(cont+" valores positivos");
