function solution(array, commands) {
    var answer = [];
    
    const c = commands.length;
    
    for(let m = 0; m < c; m++){
        const i = commands[m][0];
        const j = commands[m][1];
        const k = commands[m][2];
        
        let sliced = array.slice(i-1,j);
        let sorted = sliced.sort((a,b)=> a - b)
        answer.push(sorted[k-1])
    }
    
    return answer;
}