function solution(q, r, code) {
    const answer = [];
    
    code.split('').forEach((el,i) => {
        if(i % q === r) answer.push(el)
    })
    
    return answer.join('');
}