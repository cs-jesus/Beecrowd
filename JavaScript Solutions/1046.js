var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let horaInicial = parseInt(lines.shift()),
    horaFinal = parseInt(lines.shift()),
    diferenca = horaFinal - horaInicial;
    
if (diferenca <= 0) {
    diferenca += 24;
}
    
console.log("O JOGO DUROU "+diferenca+" HORA(S)");
