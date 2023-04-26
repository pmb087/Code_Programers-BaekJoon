function solution(my_string) {
    const memoization = [];
    let answer = '';
    
    my_string.split('').forEach(str => {
        if(!memoization.includes(str)){
            memoization.push(str);
            answer += str;
        } else return;
    })
    
    return answer;
}