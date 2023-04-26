function solution(my_string) {
    const answer = [];
    const max = my_string.length;
    
    for(let i = 0; i < max; i++){
        answer.push(my_string.slice(i))
    }
    
    return answer.sort();
}