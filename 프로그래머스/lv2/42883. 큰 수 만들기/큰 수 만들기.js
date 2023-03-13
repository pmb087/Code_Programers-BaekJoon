// // 내 풀이
// function solution(number, k) {
//     let numArr = number.split('').map(el => Number(el));
//     const answer = [];
    
//     // 제거 여유가 남았으며 number의 길이가 k보다 크다면 반복
//     // 제거가 가능한 최대 범위 내에서 가장 큰 숫자를 찾는다
//     // 해당 숫자의 인덱스를 기준으로 이전 값들은 제거한다
//     // 가장 큰 숫자는 answer에 push하고 그 이후의 값들로 number를 재할당한다.
//     // k에서 제거한 number의 길이만큼을 빼준다.
//     while(k < numArr.length && k > 0){
//         const instance = numArr.slice(0,k+1);
//         const currentMax = Math.max(...instance);
//         const maxIndex = instance.indexOf(currentMax);
        
//         answer.push(instance[maxIndex]);
//         numArr = numArr.slice(maxIndex + 1);
//         k = k - maxIndex;
//     }
    
//     // 제거 여유가 끝나서 while문을 탈출했음에도 불구하고 number배열이 남았다면
//     // 남은 값을 answer에 push해서 return될 문자열의 길이를 맞춰준다.
//     if(k === 0 && numArr.length > 0) numArr.forEach(el => answer.push(el));
//     return answer.join('');
// }

// 다른 답안
function solution(number, k) {
    const stack = [];
    let answer = '';
    
    for(let i = 0; i < number.length; i++){
        const el = number[i];

        // 제거 여유가 남았으며 현재 숫자가 stack의 가장 마지막 숫자보다 크다면 pop
        while(k > 0 && stack[stack.length-1] < el){
            stack.pop();
            k--;
        }

        // while문의 결과와 상관 없이 push
        stack.push(el);
    }

    // for문 순회가 끝났음에도 제거할 수(k) 가 남았다면 남은 수 만큼 stack의 끝부분을 잘라냄 
    stack.splice(stack.length-k, k);
    answer = stack.join("");
    return answer;
}