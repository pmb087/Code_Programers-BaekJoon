function solution(n, k) {
    const answer = [];
    const initailK = k;
    
    while(n >= k){
        answer.push(k);
        k += initailK;
    }
    
    return answer;
}