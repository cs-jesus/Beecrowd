var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let banknotes = parseInt(lines.shift()), notes = 0;
let bn100 = Math.floor(banknotes/100); notes = banknotes % 100;
let bn50 = Math.floor(notes/50); notes %= 50;
let bn20 = Math.floor(notes/20); notes %= 20;
let bn10 = Math.floor(notes/10); notes %= 10;
let bn5 = Math.floor(notes/5); notes %= 5;
let bn2 = Math.floor(notes/2); notes %= 2;
let bn1 = Math.floor(notes);
    
console.log(banknotes);
console.log(bn100+ " nota(s) de R$ 100,00");
console.log(bn50+ " nota(s) de R$ 50,00");
console.log(bn20+ " nota(s) de R$ 20,00");
console.log(bn10+ " nota(s) de R$ 10,00");
console.log(bn5+ " nota(s) de R$ 5,00");
console.log(bn2+ " nota(s) de R$ 2,00");
console.log(bn1+ " nota(s) de R$ 1,00");
