function solution(rows, columns, queries) {
    
    function rotate(startX, startY, endX, endY, arr){
        let instance = 0;
        let totalNum = [];
        
        // 윗변 이동
        for(let i = startX - 1; i <= endX - 1; i++){
            if(instance === 0){
                instance = arr[startY - 1][i]
                totalNum.push(instance);
            } else {
                let curNum = 0;
                curNum += arr[startY - 1][i];
                arr[startY - 1][i] = instance;
                instance = curNum;
                totalNum.push(instance);
            }
        }
        
        // 오른쪽 변 이동
        for(let i = startY; i <= endY - 1; i++){
            let curNum = 0;
            curNum += arr[i][endX - 1];
            arr[i][endX - 1] = instance;
            instance = curNum;       
            totalNum.push(instance);     
        }
        
        // 아랫 변 이동
        for(let i = endX - 2; i >= startX - 1; i--){
            let curNum = 0;
            curNum += arr[endY - 1][i];
            arr[endY - 1][i] = instance;
            instance = curNum;       
            totalNum.push(instance);                      
        }
        
        // 왼쪽 변 이동
        for(let i = endY - 2; i >= startY - 1; i--){
            let curNum = 0;
            curNum += arr[i][startX - 1];
            arr[i][startX - 1] = instance;
            instance = curNum;       
            totalNum.push(instance);                      
        }
        
        return [arr, Math.min(...totalNum)];
    }
    
    let curArr = new Array(rows).fill().map((el,outerIndex) => {
        return new Array(columns).fill().map((_,innerIndex) => ((outerIndex * columns) + (innerIndex + 1)))
    })
    
    const answer = [];
    
    queries.forEach(query => {
        const [sY, sX, eY, eX] = query;
        const [rotatedArr, minNum] = rotate(sX, sY, eX, eY, curArr);
        curArr = rotatedArr;
        answer.push(minNum);
    })
    
    return answer
}