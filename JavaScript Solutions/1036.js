var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let A = parseFloat(lines.shift()),
    B = parseFloat(lines.shift()),
    C = parseFloat(lines.shift()),
    D = Math.pow(B, 2) - 4 * A * C,
    rD = Math.sqrt(D);
    
if (A===0 || D<0)
    console.log("Impossivel calcular");
else {
    const R1 = ((-B + rD)/(2*A)).toFixed(5);
    const R2 = ((-B - rD)/(2*A)).toFixed(5);
    
    console.log("R1 = "+R1+"\nR2 = "+R2);
}

