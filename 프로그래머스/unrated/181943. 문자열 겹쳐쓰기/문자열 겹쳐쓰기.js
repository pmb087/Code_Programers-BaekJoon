function solution(my_string, overwrite_string, s) {
    const answer = [];
    
    answer.push(my_string.slice(0,s));
    answer.push(overwrite_string);
    
    if(my_string.length > s + overwrite_string.length){
        answer.push(my_string.slice(s + overwrite_string.length))
    }
    
    return answer.join('')
}