const solution = (N,L,R) => {
    let answer = [];
    for(let i = L; i <= R; i++) answer.push(Math.max(Math.floor(i/N),(i % N))+1);    
    return answer;
}