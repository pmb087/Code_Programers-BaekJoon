function solution(k, ranges) {
    // 정답 배열 선언
    const answer = [];
    
    // 우박수열 선언, 할당
    const collatz = [[0,k]];
    let collatzIndex = 1;
    
    while(k !== 1){
        if(k % 2 === 1){
            k = k * 3 + 1;
            collatz.push([collatzIndex,k])
            collatzIndex++;
        } else {
            k = k / 2
            collatz.push([collatzIndex,k])
            collatzIndex++;
        }
    }    
    
    // 우박수열의 마지막인덱스
    const collatzLastIndex = collatz.length - 1;
    
    // 각 영역의 넓이 선언, 할당
    const collatzArea = [];
    
    for(let i = 0; i < collatzLastIndex; i++){
        const [curY, targetY] = [collatz[i][1], collatz[i+1][1]];
        const [minY, maxY] = [Math.min(curY, targetY), Math.max(curY, targetY)];
        
        const area = (maxY - minY) / 2 + minY;
        
        collatzArea.push(area);
    }
    
    
    // 영역의 기준을 구하고 해당 기준을 이용해 넓이를 누적함
    for(let i = 0; i < ranges.length; i++){
        const [x1, x2] = ranges[i];
        const resultRange = [x1, collatzLastIndex + x2];
        
        let curSum = 0;
        
        if(resultRange[0] > resultRange[1]) answer.push(-1);
        else if(resultRange[0] === resultRange[1]) answer.push(0);
        else {
            for(let i = resultRange[0]; i < resultRange[1]; i++){
                curSum += collatzArea[i];
            }
            answer.push(curSum);
        }
    }
    
    // 정답 반환
    return answer;
}