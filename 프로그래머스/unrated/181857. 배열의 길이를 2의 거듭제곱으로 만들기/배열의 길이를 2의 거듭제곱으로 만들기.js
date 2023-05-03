function solution(arr) {
    const answer = [...arr];
    let minLength = 1;    
    while(minLength < arr.length) minLength *= 2;
    
    for(let i = 0; i < (minLength - arr.length); i++) answer.push(0);
    
    return answer;
}