function solution(numbers, n) {
    let answer = 0;
    for(let i = 0; i < numbers.length; i++){
        answer += numbers[i];
        if(answer > n) break;
    }
    
    return answer;
}