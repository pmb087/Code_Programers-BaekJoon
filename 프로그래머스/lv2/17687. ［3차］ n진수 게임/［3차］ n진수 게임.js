function solution(n, t, m, p) {
    let strLength = (t * m) - m + p;
    let nStr = '';
    
    let count = 0;
    while(nStr.length < strLength){
        nStr += count.toString(n);
        count++;
    }
    return nStr.split('').filter((el, i) => i <= strLength && i % m === p - 1).join('').slice(0,t).toUpperCase()
}

// ((v, i) => i <= max && i % m === p - 1) 

// ((el,i) => (i+1) % m === m-p)