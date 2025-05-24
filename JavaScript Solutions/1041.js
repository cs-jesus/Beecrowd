var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let Y = parseFloat(lines.shift()),
    X = parseFloat(lines.shift());

if (X > 0 && Y > 0)
    console.log("Q1");

else if (X > 0 && Y < 0)
    console.log("Q2");
    
else if(X < 0 && Y < 0)
    console.log("Q3");
    
else if (X < 0 && Y > 0)
    console.log("Q4");
    
else if (X === 0 && Y === 0)
    console.log("Origem");

else if (X===0)
    console.log("Eixo X");

else
    console.log("Eixo Y");
