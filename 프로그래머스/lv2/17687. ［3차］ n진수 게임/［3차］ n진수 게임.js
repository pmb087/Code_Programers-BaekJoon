function solution(n, t, m, p) {
    let strLength = (t * m) - m + p;
    let nStr = '';
    
    let count = 0;
    while(nStr.length < strLength){
        nStr += (count++).toString(n);
    }
    
    return nStr
        .split('')
        .filter((el, i) => i <= strLength && i % m === p - 1)
        .join('')
        .toUpperCase()
}