function solution(binomial) {
    const splited = binomial.split(' ');
    
    let left = Number(splited[0])
    let op = splited[1]
    let right = Number(splited[2])
    
    if(op === '+') return left + right;
    if(op === '-') return left - right;
    if(op === '*') return left * right;
}