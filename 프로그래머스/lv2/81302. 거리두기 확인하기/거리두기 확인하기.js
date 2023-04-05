function solution(places) {
    function searchP(curPos,curRoom){
        const [Y,X] = curPos;
        let count = 0;
        
        if(Y - 1 >= 0) if(curRoom[Y-1][X] === 'P') count++;
        if(X - 1 >= 0) if(curRoom[Y][X-1] === 'P') count++;
        if(Y + 1 <= 4) if(curRoom[Y+1][X] === 'P') count++;
        if(X + 1 <= 4) if(curRoom[Y][X+1] === 'P') count++;
        
        if(count > 0) return false;
        return true;
    }
    function searchO(curPos,curRoom){
        const [Y,X] = curPos;
        let count = 0;
        
        if(Y - 1 >= 0) if(curRoom[Y-1][X] === 'P') count++;
        if(X - 1 >= 0) if(curRoom[Y][X-1] === 'P') count++;
        if(Y + 1 <= 4) if(curRoom[Y+1][X] === 'P') count++;
        if(X + 1 <= 4) if(curRoom[Y][X+1] === 'P') count++;
        
        if(count > 1) return false;
        return true;
    }
    
    const answer = [];
    
    places.forEach(place => {
        let ok = true;
        for(let i = 0; i < 5; i++){
            for(let j = 0; j < 5; j++){
                if(place[i][j] === 'P' && ok) ok = searchP([i,j],place);
                else if(place[i][j] === 'O' && ok) ok = searchO([i,j],place);
            }
        }       
        answer.push(ok ? 1 : 0);
    })
    
    return answer;
}