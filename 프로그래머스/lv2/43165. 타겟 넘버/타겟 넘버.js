function solution(numbers, target) {
    let answer = 0;
    function dfs(curLength,curSum){
        if(curLength > numbers.length) return;
        if(curLength === numbers.length){
            if(curSum ===  target){
                answer += 1;
            } else return;
        }
        
        dfs(curLength+1,curSum + numbers[curLength])
        dfs(curLength+1,curSum - numbers[curLength])
    }
    dfs(0,0);
    return answer;
}