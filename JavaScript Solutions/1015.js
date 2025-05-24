var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let p1 = lines.shift().split(' '),
    x1 = parseFloat(p1[0]),
    y1 = parseFloat(p1[1]),
    
    p2 = lines.shift().split(' '),
    x2 = parseFloat(p2[0]),
    y2 = parseFloat(p2[1]),
    
    distance = Math.sqrt( Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2) );
    
    console.log(distance.toFixed(4));
