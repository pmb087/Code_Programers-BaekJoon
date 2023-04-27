function solution(numLog) {
    const arithm = { '1': 'w', '-1': 's', '10': 'd', '-10': 'a'};
    
    let answer = '';
    
    numLog.forEach((log,index) => {
        if(index === 0) return;
        answer += arithm[(log - numLog[index - 1]).toString()];
    })
    
    return answer;
}