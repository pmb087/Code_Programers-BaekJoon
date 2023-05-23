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
        // 방문 여부 배열
        const currentVisited = new Array(maxY).fill().map(el => Array(maxX).fill().map(el => false));
        
        // 탐색을 시작 할 위치와 움직인 거리
        const queue = [[...start,0]];
        
        // while문의 결과로 계산될 시작지점에서 끝점 까지의 최단거리
        let moveResult = 0;
        
        // 연결되어있고 방문하지 않았으며 움직일 수 있는 위치가 존재할 경우 계속해서 탐색함
        while(queue.length){
            const [Y,X, count] = queue.shift();
            
            // 방문한 곳이라면 continue
            if(currentVisited[Y][X]) continue;
            
            // 아니라면 방문 체크
            currentVisited[Y][X] = true;
            
            // 목표지점에 도달했다면 지금까지 움직인 거리를 할당하고 while문을 탈출
            if(end[0] === Y && end[1] === X){
                moveResult = count;
                break;
            }
            
            // 다음 탐색지점을 상하좌우로 확장
            for(let i = 0; i <= 3; i++){
                const [moveY, moveX] = direction[i];
                const [movedY, movedX] = [Y + moveY, X + moveX];
                             
                // 움직여야 할 위치가 배열에서 벗어난 경우 continue
                if(movedY < 0 || movedY > maxY - 1 || movedX < 0 || movedX > maxX - 1) continue;
                
                // 움직여야 할 위치가 벽이거나 이미 방문한 경우 continue
                if(maps[movedY][movedX] === 'X' || currentVisited[movedY][movedX]) continue;   
                
                // 위의 조건에 해당하지 않는경우 아직 방문하지 않았으며 탐색 가능한 위치이므로 queue에 움직인 거리와 함께 push
                queue.push([movedY,movedX,count+1]);
            }
        }
        
        // 모든 계산이 끝나면 해당위치로 이동이 불가능할 경우 0 아니면 거리를 반환
        return moveResult;
    }
    
    // 시작점 부터 레버까지의 최단거리
    const leverCount = move(startPos, leverPos);
    
    // 레버부터 끝점까지의 최단거리
    const endCount = move(leverPos, endPos);
    
    // 두 값중 하나라도 0이라면 시작점에서 끝점에 도달하는 경로가 끊긴 것이므로 -1을 리턴
    if(Math.min(leverCount, endCount) === 0) return -1;
    
    // 위의 코드에서 -1을 리턴하고 종료되지 않았다면 정답이 존재하므로 answer를 선언 ,할당
    const answer = leverCount + endCount;
    
    
    //정답 반환
    return answer
}