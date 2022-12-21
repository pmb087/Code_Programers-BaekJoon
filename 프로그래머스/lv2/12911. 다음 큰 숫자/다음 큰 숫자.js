function solution(n) {
    let answer = n+1;
    const count = n.toString(2).split('').filter(el=>el === '1').length;
    while(true){
        if(answer.toString(2).split('').filter(el=>el === '1').length === count) break;
        answer++;
    }
    return answer;
}