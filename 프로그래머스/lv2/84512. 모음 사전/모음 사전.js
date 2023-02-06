const solution = word => {
    let answer = 0;
    let max = 0;
    for(let i = 1; i <= 5; i++) max += Math.pow(5, i);
    
    word.split('').forEach((el,idx) => {
        if (word[idx] == 'A') return answer += 1;
        if (word[idx] == 'E') return answer += Math.floor(((max / Math.pow(5, idx+1)) * 1) + 1);
        if (word[idx] == 'I') return answer += Math.floor(((max / Math.pow(5, idx+1)) * 2) + 1);
        if (word[idx] == 'O') return answer += Math.floor(((max / Math.pow(5, idx+1)) * 3) + 1);
        return answer += Math.floor(((max / Math.pow(5, idx+1)) * 4) + 1);
    })     
    return answer;
}