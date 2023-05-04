function solution(a, b) {
    const A = [];
    for(let i = a.length-1; i >= 0; i--) A.push(a[i]);
    const B = [];
    for(let i = b.length-1; i >= 0; i--) B.push(b[i]);
    
    const answer = [];
    let nextOver = 0;
    
    for(let i = 0; i < Math.max(A.length, B.length); i++){
        const curA = A[i] === undefined ? 0 : Number(A[i]);
        const curB = B[i] === undefined ? 0 : Number(B[i]);
        const curSum = curA + curB + nextOver;
        
        if(curSum > 9){
            nextOver = Math.floor(curSum / 10);
            answer.push((curSum % 10).toString());
        } else {
            nextOver = 0;
            answer.push(curSum.toString());
        }
    }
    
    if(nextOver !== 0) answer.push(nextOver.toString());
    
    return answer.reverse().join('');
}