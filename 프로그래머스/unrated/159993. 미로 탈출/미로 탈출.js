function solution(maps) {    
    // 상하좌우 방향
    const direction = [[1,0],[-1,0],[0,-1],[0,1]];
    
    // 가로 세로 길이
    const maxY = maps.length;
    const maxX = maps[0].length;
    
    // 각각 위치 선언
    let startPos = [];
    let leverPos = [];
    let endPos = [];
    
    // 각각 위치 할당
    for(let i = 0; i < maps.length; i++){
        for(let j = 0; j < maps[i].length; j++){
            if(maps[i][j] === 'S') startPos = [i,j];
            if(maps[i][j] === 'L') leverPos = [i,j];
            if(maps[i][j] === 'E') endPos = [i,j];
        }
    }
    
    // 최단거리 측정 함수
    const move = (start, end) => {
        const currentVisited = new Array(maxY).fill().map(el => Array(maxX).fill().map(el => false));
        
        const queue = [[...start,0]];
        let moveResult = 0;
        
        while(queue.length){
            const [Y,X, count] = queue.shift();
            if(currentVisited[Y][X]) continue;
            currentVisited[Y][X] = true;
            
            if(end[0] === Y && end[1] === X){
                moveResult = count;
                break;
            }
            
            for(let i = 0; i <= 3; i++){
                const [moveY, moveX] = direction[i];
                const [movedY, movedX] = [Y + moveY, X + moveX];
                             
                if(movedY < 0 || movedY > maxY - 1 || movedX < 0 || movedX > maxX - 1) continue;
                if(maps[movedY][movedX] === 'X' || currentVisited[movedY][movedX]) continue;   
                
                queue.push([movedY,movedX,count+1]);
            }
        }
        
        return moveResult;
    }
    
    const leverCount = move(startPos, leverPos)
    const endCount = move(leverPos, endPos)
    
    if(Math.min(leverCount, endCount) === 0) return -1;
    const answer = leverCount + endCount;
    
    return answer
}