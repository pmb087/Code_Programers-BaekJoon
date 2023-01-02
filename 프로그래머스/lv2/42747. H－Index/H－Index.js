const solution = c => {
    c =  c.sort((a,b)=>b-a);
    let answer = [];
    for(let i = 0; i < c.length; i++){
        if(c[i] >= i+1) answer.push(c[i]);
    }
    return answer.length;
}