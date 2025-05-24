var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let index = parseInt(lines.shift()),
    expression = [];
    
let n1, n2, d1, d2, operator, nR, dR, nF, dF, mdc;

function MDC(nR, dR) {
    if (dR === 0)
        return nR;
    else
        return MDC(dR, nR % dR);
}

for (let i = 0; i<index; i++) {
    
    expression = lines.shift().split(' ');
    n1 = Number(expression[0]);
    d1 = Number(expression[2]);
    operator = expression[3];
    n2 = Number(expression[4]);
    d2 = Number(expression[6]);
    
    switch(operator) {
        
        case "+":
            nR = (n1*d2 + n2*d1);
            dR = (d1*d2);
            break;
        
        case "-":
            nR = (n1*d2 - n2*d1);
            dR = (d1*d2);
            break;
        
        case "*":
            nR = (n1*n2);
            dR = (d1*d2);
            break;
        
        case "/":
            nR = (n1*d2);
            dR = (n2*d1);
            break;
    }
    
    mdc = MDC(Math.abs(nR), Math.abs(dR));
    nF = nR/mdc;
    dF = dR/mdc;
    
    console.log(`${nR}/${dR} = ${nF}/${dF}`);
}
