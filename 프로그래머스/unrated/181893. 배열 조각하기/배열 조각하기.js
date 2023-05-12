function solution(arr, querys) {
    let answer = [...arr];
    querys.forEach((query,i) => {
        if(i % 2 === 0) answer = answer.slice(0,query+1);
        else answer = answer. slice(query);
    })
    
    return answer;
}