// 내 풀이: 또 런타임 에러(콜스택 터짐)
function solution(x, y, n) {
    const answer = [];
    function search(curNum,target,count){
        if(!Number.isInteger(curNum) || curNum < target) return;
        else if(curNum === target) answer.push(count);
        else {
            search(curNum - n, x, count + 1);
            search(curNum / 2, x, count + 1);
            search(curNum / 3, x, count + 1);
        }     
    }
    search(y,x,0);
    
    return answer.length > 0 ? Math.min(...answer) : -1;
}

// 보고 이해한 풀이: 잘하네..
function solution(x, y, n) {
    // 연산이 불필요한 경우 예외처리
    if (x === y) return 0;
    
    // 3가지 방법의 연산으로 도출된 값이 최초로 발견됐다면 기록하기 위한 객체
    const dp = {};
    
    // x는 최초값이기 때문에 연산이 적용되지 않았으므로 0
    dp[x] = 0;
    
    // data의 원소 각각에 대해서 연산을 수행한다.
    let data = [x];
    
    // while문 내에서는 아래의 연산을 수행한다
    // 3가지 연산에 대한 결과가 이미 있거나 범위를 넘어서는 경우를 제외한다(메모이제이션)
    // 그렇지 않은경우(다음 연산을 수행할 수 있는 경우)엔 newData(다음 연산의 기준값) 배열에 push한다
    // 연산 중간에 y에 도달한 값이 있다면 dp[value], 즉 해당 값을 도출하기 까지의 연산횟수를 리턴한다.
    while (data.length) {
        const newData = [];
        
        // 연산의 기준값이 들어있는 배열의 원소를 순회
        for (const d of data) {
            
            // 기준값에 3가지 연산을 수행한 값을 원소로 가지는 배열을 for of로 수행
            for (const e of [d + n, d * 2, d * 3]) {
                
                // 연산 결과값이 y를 초과했거나 다른 연산에서 이미 해당 결과값에 대한 연산 횟수를 등록했다면 continue
                if (e > y || dp[e]) continue;
                
                // 연산 결과가 y와 일치한다면 이전 연산횟수인 dp[d]에서 이번 회차의 연산횟수 1을 더해서 리턴
                if (e === y) return dp[d] + 1;
                
                // 위의 if케이스 전부 해당하지 않는 경우는 다음 연산이 가능한 상태이다
                // dp객체에 이번회차 연산결과를 key로, 이전회차 연산횟수 + 1를 value로 저장한다.
                dp[e] = dp[d] + 1;
                
                // newData에 이번회차의 연산결과를 push한다.
                newData.push(e);
            }
        }
        
        // 이번회차의 연산결과가 담긴 배열을 다음 회차의 기준값 배열에 할당한다.
        data = newData;
    }
    
    // while문을 빠져나오는 조건인 각각의 연산 결과값이 모두 y를 초과했을 경우
    // 간단히 말하면 3가지 연산의 어떤 조합으로도 y를 도출할 수 없는 경우 -1을 리턴한다.
    return -1;
}