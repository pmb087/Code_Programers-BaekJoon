function solution(num, k) {
    const answer = num.toString().indexOf(k.toString());
    
    return answer === -1 ? -1 : answer + 1;
}