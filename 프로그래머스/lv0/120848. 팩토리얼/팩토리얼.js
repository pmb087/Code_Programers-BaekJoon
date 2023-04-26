function solution(n) {
    let answer = 1;
    let sum = 1;
    
    while(true){
        if(sum > n) break;
        answer++;
        sum *= answer;
    }
    
    return --answer;
}