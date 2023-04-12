function solution(name, yearning, photo) {
    const answer = [];
    
    let yearn = {};    
    for(let i = 0; i < name.length; i++) yearn[name[i]] = yearning[i];
    
    for(let i = 0; i < photo.length; i++){
        let sum = 0;
        
        for(let k = 0; k < photo[i].length; k++){
            if(yearn[photo[i][k]] !== undefined) sum += yearn[photo[i][k]];
        }
        
        answer.push(sum);
    }
    
    return answer;
}