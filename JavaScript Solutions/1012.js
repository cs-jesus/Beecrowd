var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let A = parseFloat(lines[0]),
    B = parseFloat(lines[1]),
    C = parseFloat(lines[2]),
    triangle = (A*C/2).toFixed(3),
    circle = (3.14159 * C*C).toFixed(3),
    trapezium = ((A+B)/2*C).toFixed(3),
    square = (B*B).toFixed(3),
    rectangle = (A*B).toFixed(3);
    
console.log("TRIANGULO: "+triangle);    
console.log("CIRCULO: "+circle);    
console.log("TRAPEZIO: "+trapezium);    
console.log("QUADRADO: "+square);    
console.log("RETANGULO: "+rectangle);
