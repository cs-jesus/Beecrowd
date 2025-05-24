var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let A = parseFloat(lines.shift()),
    B = parseFloat(lines.shift()),
    C = parseFloat(lines.shift());
    
const 
    AB = A+B, 
    AC = A+C, 
    BC = B+C;
        
    
if ( AB>C && AC>B && BC>A ) {
    const perimetro = A+B+C;
    console.log("Perimetro = "+perimetro.toFixed(1));
    
} else {
    const area = (A+B)/2 * C;
    console.log("Area = "+area.toFixed(1));
}
