const direction = [[-1,0],[1,0],[0,-1],[0,1]];

function solution(maps){
    const answer = [];
    maps = maps.map(el => el.split(''));
    const [maxI,maxJ] = [maps.length -1, maps[0].length -1];
    
    for(let i = 0; i <= maxI; i++){
        for(let j = 0; j <= maxJ; j++){
            const curVal = maps[i][j];
            
            if(curVal === 'X') continue;
            
            maps[i][j] = 'X';
            
            let curSum = Number(curVal);
            
            const queue = [[i,j]];
            
            while(queue.length){
                const [Y,X] = queue.shift();
                
                for(let k = 0; k < 4; k++){
                    const [moveY,moveX] = direction[k];
                    const [movedY, movedX] = [Y + moveY, X + moveX];
                    if(movedY > maxI || movedY < 0 || movedX > maxJ || movedX < 0) continue;
                    let targetValue = maps[movedY][movedX]
                    
                    if(targetValue === 'X') continue;
                    maps[movedY][movedX] = 'X'
                    curSum += Number(targetValue);
                    
                    queue.push([movedY, movedX]); 
                }
            }
            
            answer.push(curSum)
        }
    }
    
    return answer.length < 1 ? [-1] : answer.sort((a,b) => a-b)
} 