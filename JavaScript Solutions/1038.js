var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let code = parseInt(lines.shift()),
    quantity = parseInt(lines.shift()),
    price = 0.00;
    
switch(code) {
    case 1: 
        price = 4.00;
        break;
        
    case 2:
        price = 4.50;
        break;
    
    case 3: 
        price = 5.00;
        break;
        
    case 4:
        price = 2.00;
        break;
        
    case 5: 
        price = 1.50;
        break;
        
    default:
        break;
}

const total = quantity*price;

console.log("Total: R$ "+total.toFixed(2));
