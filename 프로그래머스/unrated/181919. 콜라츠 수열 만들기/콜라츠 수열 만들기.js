function solution(n) {
    const answer = [n];
    let copy = n;
    
    while(true){
        if(copy === 1) break;
        if(copy % 2 === 0){
            copy = copy / 2;
            answer.push(copy);
        } else {
            copy = 3 * copy + 1;
            answer.push(copy);
        }
    }
    
    return answer;
}