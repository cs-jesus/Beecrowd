var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let prod1 = lines.shift().split(' '),
    prod1_id = parseInt(prod1[0]),
    prod1_units = parseInt(prod1[1]),
    prod1_price = parseFloat(prod1[2]),
    
    prod2 = lines.shift().split(' ')
    prod2_id = parseInt(prod2[0]),
    prod2_units = parseInt(prod2[1]),
    prod2_price = parseFloat(prod2[2]),
    
    total = (prod1_units*prod1_price + prod2_units*prod2_price).toFixed(2);
    
console.log("VALOR A PAGAR: R$ "+total);
