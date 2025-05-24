var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let cases = parseInt(lines.shift()), num, 
    number1=0.0, number2=0.0, number3=0.0, avg=0.0;

for (let i=0; i<cases; i++) {
    num = lines.shift().split(' ');
    
    number1 = parseFloat(num[0]);
    number2 = parseFloat(num[1]);
    number3 = parseFloat(num[2]);
    avg = ((number1*2)+(number2*3)+(number3*5))/10;
    
    console.log(avg.toFixed(1));
}
