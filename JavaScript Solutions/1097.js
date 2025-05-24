var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let aux=7;

for (let i=1; i<=9; i+=2) {
    for (let j=aux; j>(aux-3); j--) {
        console.log(`I=${i} J=${j}`);
    }
    
    aux+=2;
}
