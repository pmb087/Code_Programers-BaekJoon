const solution = n => {
    let answer = 0;
    let arg1 = 0;
    let arg2 = 1;
    
    for(let i = 2 ; i <= n + 1 ; i++) {
        answer = arg1 + arg2 % 1234567;
        arg1 = arg2;
        arg2 = answer;
    }
    return answer % 1234567;
}
