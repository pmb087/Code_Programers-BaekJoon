function solution(my_string, queries) {
    let answer = my_string;
    queries.forEach(el => {
        const [start,end] = el;
        const left = answer.slice(0,start);
        const middle = answer.slice(start,end+1).split('').reverse().join('');
        const right = answer.slice(end+1);
        
        answer = left + middle + right;
    })
    
    return answer
}