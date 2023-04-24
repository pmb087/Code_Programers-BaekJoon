function solution(start, end) {
    const answer = [];
    
    for(let i = start; i >= end; i--){
        answer.push(i);
    }
    
    return answer;
}