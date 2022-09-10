function solution(board, moves) {
    
    let stack = [];
    let answer = 0;
    
    moves.forEach((el) => {
            for(let j = 0; j < board.length; j++){
                if(board[j][el-1] != 0){
                    stack.push(board[j][el-1]);
                    board[j][el-1] = 0;
                    break;
                }
            }        
    }) 
    
    for(let k = 0; k < stack.length; k++){
        if(stack[0] == stack[1]){
            stack.shift();
            stack.shift();
            answer += 2;
            } else 
        if(stack[k] == stack[k+1]){
                stack.splice(k,2);
                answer += 2;
                k = 0;
            }
        }
    return answer;
}