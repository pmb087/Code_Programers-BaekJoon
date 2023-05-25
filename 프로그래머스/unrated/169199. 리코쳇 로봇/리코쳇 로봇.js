function solution(board) {
    
    // 방문 배열 선언
    let visited = new Array(board.length).fill().map(el => new Array(board[0].length).fill().map(Iel =>false));
    
    // 가로 세로 길이
    const lengX = board.length;
    const lengY = board[0].length;
    
    // G와 R을 담을 배열, R은 그대로 bfs.queue에 사용되기 때문에 현재 탐색 횟수인 c(count)도 포함하여 담는다.
    let dest;
    let queue = [];

    // 출발점과 도착점 찾기
    board.forEach((v, i) => {
        if (v.indexOf("R") > -1) queue.push([i, v.indexOf("R"), 0]);
        if (v.indexOf("G") > -1) dest = [i, v.indexOf("G")];
    });

    //bfs
    // 너비 우선 탐색이기 때문에 가장 먼저 나오는 값이 가장 작은값이다,
    while (queue.length) {
        const [x, y, c] = queue.shift(); // 현재 노드, depth
        if (dest[0] === x && dest[1] === y) return c; // 도착하면 현재이동 횟수 리턴
        visited[x][y] = true;
        
        //상하좌우 큐에 추가
        let xx = x;
        let yy = y;
        
        // 상 - 수정된 x좌표인 x를 D를 만날 때 까지 빼준다
        //      while의 조건 자체가 xx기 때문에 음수가 되어 falsy값이 되면 탈출한다
        //      때문에 인덱스 0 이하로 내려갈 일은 없다.
        while (xx) {
            if (board[xx - 1][y] === "D") break;
            xx -= 1;
        }
        
        // 처음 방문한 곳이라면 queue에 이동횟수를 + 1 하고 추가
        if (!visited[xx][y]) queue.push([xx, y, c + 1]);
        
        //하 - 위와 같지만 while문의 조건이 최대 인덱스를 넘어가지 않는 것이다
        xx = x;
        while (xx < lengX - 1) {
            if (board[xx + 1][y] === "D") break;
                xx += 1;
            }
        if (!visited[xx][y]) queue.push([xx, y, c + 1]);
        //좌
        while (yy) {
            if (board[x][yy - 1] === "D") break;
            yy -= 1;
        }
        if (!visited[x][yy]) queue.push([x, yy, c + 1]);
        //우
        yy = y;
        while (yy < lengY - 1) {
            if (board[x][yy + 1] === "D") break;
            yy += 1;
        }
        if (!visited[x][yy]) queue.push([x, yy, c + 1]);
    }
    
    return -1;
}