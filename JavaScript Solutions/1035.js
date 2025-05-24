var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let A = parseInt(lines.shift()),
    B = parseInt(lines.shift()),
    C = parseInt(lines.shift()),
    D = parseInt(lines.shift());
    
const 
    CD = C+D, 
    AB = A+B;
    
if ( (B>C) && (D>A) && (CD>AB) && (C > 0) && (D > 0) &&  (A%2===0) )
    console.log("Valores aceitos");
else
    console.log("Valores nao aceitos");
