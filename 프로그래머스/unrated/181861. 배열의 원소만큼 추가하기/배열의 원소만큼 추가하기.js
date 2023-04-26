function solution(arr) {
    const answer = [];
    
    arr.forEach(num => {
        for(let i = 0; i < num; i++) answer.push(num);
    })
    
    return answer;
}