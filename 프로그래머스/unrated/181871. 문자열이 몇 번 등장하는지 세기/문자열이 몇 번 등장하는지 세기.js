function solution(myString, pat) {
    let pos = 0;
    let answer = 0;
    
    while(myString.indexOf(pat,pos) !== -1){
        pos = myString.indexOf(pat,pos) + 1
        answer++;
    }
    
    return answer;
}