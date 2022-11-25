const solution = (k, score) => {
    let answer = [];
    for(let i = 0; i < score.length; i++){
        const targetIndex = i < k ? i : k -1 ;
        answer.push(score.slice(0,i+1).sort((a,b)=> b-a)[targetIndex])
    }
    return answer;
}