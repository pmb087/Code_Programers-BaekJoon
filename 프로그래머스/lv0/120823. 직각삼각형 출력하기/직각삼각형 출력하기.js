const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    input = line;
}).on('close', function () {
    let inputNum = Number(input);
    for (let i = 1; i <= inputNum; i++) {
        console.log('*'.repeat(i))
    }
});