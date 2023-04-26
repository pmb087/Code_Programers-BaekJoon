function solution(array) {
    let answer = 0;
    array.join('').split('').forEach(el => {
        if(el === '7') answer++;
    })
    
    return answer;
}