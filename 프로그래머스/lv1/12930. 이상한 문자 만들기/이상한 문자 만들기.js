function solution(s) {
    let answer = '';
    let first = s.split(" ");
    for(let i = 0; i < first.length; i++){
        for(let j = 0; j < first[i].length; j++){
            (j % 2) === 0 ? 
                (answer += first[i][j].toUpperCase()) : 
                (answer += first[i][j].toLowerCase());
        }
        answer += " ";
    }
    

    return answer.slice(0,answer.length-1);
}