function solution(my_str, n) {
    const answer = []
    let curPos = 0;
    let targetPos = n;
    while(my_str.length >= targetPos){
        answer.push(my_str.slice(curPos,targetPos));
        curPos += n;
        targetPos += n;
    }
    const last = my_str.slice(curPos);
    if(last !== '') answer.push(last);
    
    return answer;
}