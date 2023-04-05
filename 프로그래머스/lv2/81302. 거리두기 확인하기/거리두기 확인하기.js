function solution(places) {
    function search(curPos,curRoom,type){
        const [Y,X] = curPos;
        let count = 0;
        
        if(Y - 1 >= 0) if(curRoom[Y-1][X] === 'P') count++;
        if(X - 1 >= 0) if(curRoom[Y][X-1] === 'P') count++;
        if(Y + 1 <= 4) if(curRoom[Y+1][X] === 'P') count++;
        if(X + 1 <= 4) if(curRoom[Y][X+1] === 'P') count++;
        
        if(type === 'P') if(count > 0) return false;
        if(type === 'O') if(count > 1) return false; 
            
        return true;
    }
    
    const answer = [];
    
    places.forEach(place => {
        let ok = true;
        for(let i = 0; i < 5; i++){
            for(let j = 0; j < 5; j++){
                if(place[i][j] === 'P' && ok) ok = search([i,j],place,'P');
                else if(place[i][j] === 'O' && ok) ok = search([i,j],place,'O');
            }
        }       
        answer.push(ok ? 1 : 0);
    })
    
    return answer;
}