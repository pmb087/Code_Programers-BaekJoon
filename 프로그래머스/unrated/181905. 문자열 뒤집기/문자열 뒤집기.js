function solution(my_string, s, e) {
    const left = my_string.slice(0,s);
    const middle = my_string.slice(s,e+1).split('').reverse().join('');
    const right = my_string.slice(e+1)
    
    return left + middle + right;
}