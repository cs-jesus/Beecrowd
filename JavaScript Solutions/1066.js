var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let num, contPar=0, contImpar=0, contPositivo=0, contNegativo=0;

for(let i=0;i<5;i++) {
    num = parseInt(lines.shift());
    
    if(num%2===0) contPar++;
    else contImpar++;
    
    if(num>0) contPositivo++;
    else if(num<0) contNegativo++;
}

console.log(contPar+" valor(es) par(es)");
console.log(contImpar+" valor(es) impar(es)");
console.log(contPositivo+" valor(es) positivo(s)");
console.log(contNegativo+" valor(es) negativo(s)");
