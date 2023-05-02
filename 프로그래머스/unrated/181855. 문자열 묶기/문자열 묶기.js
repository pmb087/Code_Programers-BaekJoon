function solution(strArr) {
    let answer = {};
    strArr.forEach(el => {
        const length = el.length;
        
        if(answer[length] === undefined) answer[length] = 1;
        else answer[length]++;
    })
    
    return Math.max(...Object.values(answer))
}