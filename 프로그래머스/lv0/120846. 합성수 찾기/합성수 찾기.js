function solution(n) {
    let answer = 0;
    
    for(let i = 4; i <= n; i++){
        let instance = 0;
        for(let j = 1; j <= i; j++){
            if(i % j === 0) instance++;
            if(instance >= 3) break;
        }
        if(instance >= 3) answer++;
    }
    
    return answer;
}