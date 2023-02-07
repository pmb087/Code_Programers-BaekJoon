// 현재 위치에서 동서남북으로 움직일 경우 추가되는 Pos값
const DIRECTION = [[1, 0], [0, 1], [-1, 0], [0, -1]];

// OR 연산자를 사용해서 4가지 조건중 하나라도 True라면 True, 아니면 False를 return하는 함수
// 이동이 불가능 할 경우가 True다
const isRoad = (nextY, nextX, row, col) => nextY < 0 || nextX < 0 || nextY > row || nextX > col;

function solution(maps) {
    // 문제 조건에선 5x5였지만 다른 크기의 maps를 대비해서 X,Y값을 추출
    const row = maps.length - 1, col = maps[0].length - 1;

    // 시작X, 시작Y, 시작Count
    const queue = [[0, 0, 1]];

    // while문 내부의 마지막 라인인 queue.push를 통해 
    // 추가적인 이동에 대한 정보가 더이상 없을 때 까지
    // 즉 모든 이동에 관해서 추가 이동이 불가능한 상태일 때 까지 실행
    while(queue.length) {
        // queue에 담아뒀던 X,Y,Count 정보를 추출
        let [y, x, count] = queue.shift();
        
        // 도착 지점이라면 현재 기록된 count를 가지고 while문 탈출
        if(y === row && x === col) return count;
        
        // 동서남북 4가지 방향에 관해서 탐색 실행
        for(let i = 0; i < DIRECTION.length; i++) {
            // DIRECTION 객체에 다음 이동에 필요한 Pos값을 받아와서
            // 만일 이동 했을 경우의 Pos값을 계산 
            const [dy, dx] = DIRECTION[i];            
            const nextY = dy + y, nextX = dx + x;
            
            // 계산한 Pos값을 이용해서 해당 Pos로의 이동이 가능한지 판단하고
            // 이동이 불가능 할 경우 하단의 코드는 무시하고 for문의 다음회차로 진행
            if(isRoad(nextY, nextX, row, col)) continue;
            if(maps[nextY][nextX] === 0) continue;
            
            // 이미 지나온 길을 다시 돌아갈 수 있다면 무한루프가 발생하기 때문에 0으로 변환함
            maps[nextY][nextX] = 0;            
            
            // 다음 위치로 이동이 가능 할 경우 해당 정보를 queue에 push하여
            // while문의 조건을 유지함
            queue.push([nextY, nextX, count + 1]);
        }
    }

    // while문을 통해서 정답이 도출되지 않았다면
    // 도착지점으로의 이동이 불가능한 상태이기 때문에
    // 문제 조건에 따라서 -1을 return
    return -1;
}