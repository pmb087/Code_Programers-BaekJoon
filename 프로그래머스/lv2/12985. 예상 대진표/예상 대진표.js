function solution(n,a,b){
    let answer = 1;
    if((a === 1 && b === 2) || (a % 2 === 1 && a + 1 === b) || (b % 2 === 1 && b + 1 === a)) return answer;
    while(Math.max(a,b) - 1 !== Math.min(a,b) || Math.max(a,b) % 2 === 1){
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        answer++;
    }
    return answer;
}