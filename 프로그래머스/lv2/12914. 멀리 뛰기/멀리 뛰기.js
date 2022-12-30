function solution(n) {
    let answer, t1 = 0, t2 = 1;
    for(let i = 2 ; i <= n + 1 ; i++) {
        answer = t1 + t2 % 1234567;
        t1 = t2;
        t2 = answer;
    }
    return answer % 1234567;
}
