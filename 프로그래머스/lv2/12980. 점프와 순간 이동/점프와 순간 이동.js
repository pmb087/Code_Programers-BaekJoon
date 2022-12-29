function solution(n){
    let answer = 0;
    while(n !== 0){
        if(n % 2 === 1){
            answer++;
            n--;
        }
        n = n / 2;
    }
    return answer;
}