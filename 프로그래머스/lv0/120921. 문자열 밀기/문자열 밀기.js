function solution(A, B) {
    let count = 0;
    let copy = A;
    
    while(copy !== B){
        if(count > B.length) break;
        const left = copy.slice(copy.length - 1);
        const right = copy.slice(0, copy.length - 1);
        copy = left + right;
        count++
    }
    
    return count > B.length ? -1 : count;
}