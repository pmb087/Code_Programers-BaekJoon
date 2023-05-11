function solution(board) {
    let temp = [];
    
    for(let i = 0; i < board.length+2; i++){
        let instance = new Array(board.length+2).fill();
        instance = instance.map(el => 0);
        
        temp.push(instance);
    }
    
    for(let i = 0 ; i < board.length; i++){
        for(let j = 0 ; j < board[i].length; j++){
            if(board[i][j] === 1) {
                temp[i][j] = 1;
                temp[i][j+1] = 1;
                temp[i][j+2] = 1;
                temp[i+1][j] = 1;
                temp[i+1][j+1] = 1;
                temp[i+1][j+2] = 1;
                temp[i+2][j] = 1;
                temp[i+2][j+1] = 1;
                temp[i+2][j+2] = 1;
            }
        }
    }
    
    temp = temp.slice(1,temp.length-1).map(el => {
        const sliced = el.slice(1,el.length-1);
        
        return sliced;
    })
    
    let answer = board.length ** 2;
    
    temp.forEach(Oel => {
        Oel.forEach(Iel => {
            if(Iel === 1) answer--;
        })
    })
    
    return answer;
}