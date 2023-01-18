function isPrime(num){
    for(let i=2; i*i<=num; i++){
        if(num % i == 0) return false;
    }
    return true;
}


function solution(n, k) {
    let count = 0;
    
    const myN = n.toString(k).split('0').filter(el => {
        if(el === '') return false;
        if(el === '1') return false;
        return true;
    }).map(el => isPrime(Number(el)));
    
    myN.forEach(el => {
        if(el) count++;
    })
    
    return count;
}