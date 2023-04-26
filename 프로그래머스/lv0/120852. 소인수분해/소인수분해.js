function solution(n) {
    let copy = n;
    let initial = 2;
    const answer = [];
    
    while(copy !== 1){
        if(copy % initial === 0){
            copy = copy / initial;
            if(!answer.includes(initial)) answer.push(initial);
            initial = 2;
            continue;
        } else {
            initial++
        }
    }
    
    return answer.sort((a,b) => a-b)
}