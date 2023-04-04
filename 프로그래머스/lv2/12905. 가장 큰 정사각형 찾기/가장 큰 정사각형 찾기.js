function solution(board){
    // board의 복사본을 생성
    let cache = new Array(board.length).fill(0).map(e => new Array(board[0].length).fill(0));
    
    // 다만 1열과 나머지열의 0번인덱스만 복사, 나머지는 0
    // 이후 2중 반복문에서 해당 위치의 board 원소와 좌상단 상단 좌단의 값을 비교하여 1로 이뤄진 정사각형을 판별하기 때문에
    // 당장 1,1 ~ width,height 까지의 복사본 값은 필요없음
    
    // ex)
    // [ 0, 1, 1, 1 ]
    // [ 1, 0, 0, 0 ]
    // [ 1, 0, 0, 0 ]
    // [ 0, 0, 0, 0 ]
    for (let i = 0; i < board.length; i++) cache[i][0] = board[i][0];
    for (let i = 0; i < board[0].length; i++) cache[0][i] = board[0][i];
    
    // 0번 인덱스의 원소들과 각 인덱스의 원소별 0번 인덱스는 
    // 이미 board배열에서 복사했기 때문에 for문의 조건에 포함하지 않음
    
    // 현재 인덱스가 1이라면 좌상단, 상단, 좌단의 값을 Math.min으로 실행하여 얻은 값 + 1을 해줌
    // 전부 1로 이뤄져있다면 2가 도출되며 현재 위치는 2*2의 정사각형의 우측하단 기준점이라는 뜻임
    // 따라서 좌상단, 상단, 좌단의 값을 Math.min으로 실행하여 얻은 값 + 1은 현재 위치를 정사각형의 우하단 기준으로 봤을 때
    // 해당 정사각형의 한 변의 길이가 됨
    
    // ex)
    // [ 0, 1, 1, 1 ]
    // [ 1, 1, 2, 2 ]
    // [ 1, 2, 2, 3 ]
    // [ 0, 0, 1, 0 ]
    for (let i = 1; i < board.length; i++) {
        for (let j = 1; j < board[0].length; j++) {
            if (board[i][j] == 1)
                cache[i][j] = Math.min(cache[i - 1][j - 1], cache[i][j - 1], cache[i - 1][j])+ 1;
        }
    }
    
    // 최종적으로 cache 배열에 포함된 숫자중 가장 큰 값의 의미는
    // 해당 좌표를 정사각형의 우측 하단 기준으로 봤을 때 그 값을 한 변의 길이로 하는 정사각형이 존재한다는 뜻
    // cache 배열의 원소중 가장 큰 값을 찾아서 제곱(넓이 구하기) 하여 리턴한다.
    return Math.pow(cache.reduce((prev, next) => Math.max(prev, Math.max(...next)),0), 2);
}