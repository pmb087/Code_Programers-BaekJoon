function solution(n) {
    let answer = [];
    
    for(let i = 0; i < n; i++){
        const instance = [];
        for(let j = 0; j < n; j++){
            if(i === j) instance.push(1);
            else instance.push(0);
        }
        answer.push(instance);
    }
    
    return answer;
}