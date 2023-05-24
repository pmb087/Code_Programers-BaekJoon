function solution(n) {
    let answer = 0;
    
    const isPossible = (arr,row) => {
        for(let i = 1; i < row; i++){
            if(arr[i] === arr[row]) return false;
            if(Math.abs(i - row) === Math.abs(arr[i] - arr[row])) return false;
        }
        return true;
    }
    
    const dfs = (arr,row) => {
        if(row === n) {
            answer++;
            return;
        } else {
            for(let i = 1; i <= n; i++){
                const newChess = [...arr];
                newChess[row + 1] = i;
                
                if(isPossible(newChess,row+1)) dfs(newChess, row+1);
            }
        }
    }
    
    for(let i = 1; i <= n; i++){
        const chess = new Array(n+1).fill(0);
        chess[1] = i;
        
        dfs(chess,1);
    }
    
    return answer;
}