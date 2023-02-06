const solution = word => {
    let answer = 0;
    let max = 0;
    for(let i = 1; i <= 5; i++) max += Math.pow(5, i);
    
    word.split('').forEach((el,idx) => {
        if (word[idx] == 'A') answer += 1;
        else if (word[idx] == 'E') answer += Math.floor(((max / Math.pow(5, idx+1)) * 1) + 1);
        else if (word[idx] == 'I') answer += Math.floor(((max / Math.pow(5, idx+1)) * 2) + 1);
        else if (word[idx] == 'O') answer += Math.floor(((max / Math.pow(5, idx+1)) * 3) + 1);
        else answer += Math.floor(((max / Math.pow(5, idx+1)) * 4) + 1);
    })     
    return answer;
}