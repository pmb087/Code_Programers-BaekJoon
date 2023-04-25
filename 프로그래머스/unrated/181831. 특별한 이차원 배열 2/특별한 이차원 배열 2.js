function solution(arr) {
    let answer = 1;
    
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i][j] !== arr[j][i]) answer = 0;
            if(answer === 0) break;
        }
        if(answer === 0) break;
    }
    
    return answer;
}