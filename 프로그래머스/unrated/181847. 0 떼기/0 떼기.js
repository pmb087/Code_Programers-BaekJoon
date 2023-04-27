function solution(n_str) {
    if(n_str[0] !== '0') return n_str;
    
    let pos = 0;
    
    while(n_str[pos + 1] === '0') pos++;
    
    return n_str.slice(pos+1)
}