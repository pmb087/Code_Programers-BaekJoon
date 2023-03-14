function solution(n) {
    const direction = [[1,0],[0,1],[-1,-1]];
    const arr = Array.from({ length: n }, () => new Array(n).fill(0));
    const answer = [];
    
    let col = -1;
    let row = 0;
    
    let directionWay = 0;
    let currentCount = 1;
    
    for(let i = n; i > 0; i--){
        for(let j = 0; j < i; j++){
            const [curC, curR] = direction[directionWay];
            col += curC;
            row += curR;
            arr[col][row] = currentCount;
            currentCount++;
        }
        directionWay = (directionWay + 1) % 3;
    }
    
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            const instance = arr[i][j];
            
            if(instance === 0) continue;
            
            answer.push(instance);
        }
    }
    return answer;
}