var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let i=1, j=0;

for (j=60; j>=0; j-=5) {
    console.log(`I=${i} J=${j}`);
    i+=3;
}
