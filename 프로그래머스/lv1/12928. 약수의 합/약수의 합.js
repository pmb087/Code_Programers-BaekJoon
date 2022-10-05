function solution(n) {
    let result = 0;
    let num = [];
    for(let i = 1; i <= n; i++) if((n % (i)) === 0 ) num.push(i);
    num.forEach(el => result += el)
    return result;
}