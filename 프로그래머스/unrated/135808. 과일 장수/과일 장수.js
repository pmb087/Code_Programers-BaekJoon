function solution(k, m, score) {
    let answer = 0;
    let minus = m;
    let sortedArr = score.sort((a,b)=>a-b);
    while(score.length - minus >= 0){
        answer += Math.min(...sortedArr.slice(score.length - minus, score.length - minus + m)) * m
        minus += m;
    }
    return answer;

    
}