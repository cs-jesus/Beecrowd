var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let value = (parseFloat(lines.shift())).toFixed(2), notes,
    bn100, bn50, bn20, bn10, bn5, bn2,
    c100, c50, c25, c10, c5, c1;
    
    bn100 = parseInt(Math.floor(value/100)); notes = value % 100;
    bn50 = parseInt(Math.floor(notes/50)); notes %= 50;
    bn20 = parseInt(Math.floor(notes/20)); notes %= 20;
    bn10 = parseInt(Math.floor(notes/10)); notes %= 10;
    bn5  = parseInt(Math.floor(notes/5)); notes %= 5;
    bn2 = parseInt(Math.floor(notes/2)); notes %= 2;
    
    c100 = parseInt(Math.floor(notes)); notes %= 1;
    c50 = parseInt(Math.floor(notes/0.5)); notes %= 0.5;
    c25 = parseInt(Math.floor(notes/0.25)); notes %= 0.25;
    c10 = parseInt(Math.floor(notes/0.1)); notes %= 0.1;
    c5 = parseInt(Math.floor(notes/0.05)); notes %= 0.05;
    c1 = parseInt(Math.round(notes/0.01));
    
console.log("NOTAS:");
console.log(`${bn100} nota(s) de R$ 100.00`);
console.log(`${bn50} nota(s) de R$ 50.00`);
console.log(`${bn20} nota(s) de R$ 20.00`);
console.log(`${bn10} nota(s) de R$ 10.00`);
console.log(`${bn5} nota(s) de R$ 5.00`);
console.log(`${bn2} nota(s) de R$ 2.00`);

console.log("MOEDAS:");
console.log(`${c100} moeda(s) de R$ 1.00`);
console.log(`${c50} moeda(s) de R$ 0.50`);
console.log(`${c25} moeda(s) de R$ 0.25`);
console.log(`${c10} moeda(s) de R$ 0.10`);
console.log(`${c5} moeda(s) de R$ 0.05`);
console.log(`${c1} moeda(s) de R$ 0.01`);
