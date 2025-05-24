var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let distance = parseInt(lines.shift()),
    fuel = parseFloat(lines.shift()),
    kml = (distance/fuel).toFixed(3);
    
console.log(kml+" km/l");
