function solution(n) {
    const answer = [];
    
    for(let i = 1; i <= (n / 2); i++){
        if(n % i === 0) answer.push(i);
    }
    
    answer.push(n);
    
    return answer;
}