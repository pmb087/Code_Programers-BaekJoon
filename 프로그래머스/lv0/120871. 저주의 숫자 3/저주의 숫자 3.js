function solution(n) {
    let start = 1;
    let answer = n;
    
    while(start <= answer){
        const curArr = start.toString().split('').map(el => Number(el));
        if(curArr.includes(3) || start % 3 === 0) answer++;
        start++;
    }
    
    return answer;
}