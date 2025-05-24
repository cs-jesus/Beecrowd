var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let name = lines.shift(),
    fixed_salary = parseFloat(lines.shift()),
    sale = parseFloat(lines.shift()),
    salary = (sale*0.15 + fixed_salary).toFixed(2);
    
console.log("TOTAL = R$ "+salary);
