const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    const answer = str.split('').map(el => {
        if(el === el.toLowerCase()) return el.toUpperCase();
        else return el. toLowerCase();
    }).join('')
    
    console.log(answer)
});