var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const salario = parseFloat(lines.shift());

let aliquota=0, reajuste=0.00, total=0.00;

if (salario >= 0 && salario <= 400.0) {
    aliquota = 15;

} else if (salario >= 400.0 && salario <= 800.0) {
    aliquota = 12;

} else if (salario >= 800.0 && salario <= 1200.0) {
    aliquota = 10;

} else if (salario >= 1200.0 && salario <= 2000.0) {
    aliquota = 7;

} else if (salario > 2000.0) {
    aliquota = 4;

}

reajuste = (salario*(aliquota/100.00));
total = salario+reajuste;

console.log("Novo salario: "+ total.toFixed(2));
console.log("Reajuste ganho: "+ reajuste.toFixed(2));
console.log("Em percentual: "+aliquota+" %");
