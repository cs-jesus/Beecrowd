var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let notas = lines.shift().split(' '),
    n1 = parseFloat(notas[0]),
    n2 = parseFloat(notas[1]),
    n3 = parseFloat(notas[2]),
    n4 = parseFloat(notas[3]),
    media = ( (n1*2) + (n2*3) + (n3*4) + (n4) )/10;
    
console.log("Media: "+media.toFixed(1));
    
if (media >= 7)
    console.log("Aluno aprovado.");
    
else if (media < 5)
    console.log("Aluno reprovado.");

else {
    

    console.log("Aluno em exame.");
    
    let exame = parseFloat(lines.shift()),
        mediaFinal = (media+exame)/2.0;
    
    console.log("Nota do exame: "+exame.toFixed(1));
    if (mediaFinal < 5)
        console.log("Aluno reprovado.");
        
    else
        console.log("Aluno aprovado.");
        
    console.log("Media final: "+mediaFinal.toFixed(1));
}
