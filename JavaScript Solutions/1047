var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let horaInicial = parseInt(lines.shift()),
    minutoInicial = parseInt(lines.shift()),
    horaFinal = parseInt(lines.shift()),
    minutoFinal = parseInt(lines.shift()),
    diferencaHora = horaFinal - horaInicial,
    diferencaMinuto = minutoFinal - minutoInicial;
    
if (diferencaHora < 0) {
    diferencaHora += 24;
}
    
if (diferencaMinuto < 0) {
    diferencaMinuto += 60;
    
    if (diferencaHora === 0)
        diferencaHora += 24;
    
    diferencaHora -= 1;

    
} else if (diferencaMinuto > 0) {
    if (diferencaHora < 0)
        diferencaHora += 1;
    
} else {
    if (diferencaHora === 0)
        diferencaHora +=24;
}

console.log(`O JOGO DUROU ${diferencaHora} HORA(S) E ${diferencaMinuto} MINUTO(S)`);
