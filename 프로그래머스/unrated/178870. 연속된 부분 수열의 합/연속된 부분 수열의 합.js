// 내 풀이 - O(n^2)라서 시간초과
// function solution(sequence, k) {
//     const answer = [];
//     for(let i = 0; i < sequence.length; i++){
//         let sum = sequence[i];
        
//         if(sum === k) {
//             answer.push([i,i]);
//             continue;
//         }
        
//         for(let j = i+1; j < sequence.length; j++){
//             sum += sequence[j];
            
//             if(sum === k) {
//                 answer.push([i,j]);
//                 break;
//             }
//         }
//     }
    
//     return answer.sort((a,b) => (a[1] - a[0]) - (b[1] - b[0]))
//         .filter(el => answer[0][1] - answer[0][0] === el[1] - el[0])
//         .sort((a,b) => a[0] - b[0])[0]
// }

// 힌트 보고 직접 작성한 풀이
function solution(sequence, k){
    let answer = [];
    let sumArr = [0];
    let maxLength = Infinity;
    
    sequence.forEach((el,i) => {
        sumArr.push(sumArr[i] + sequence[i]);
    })
    
    let left = 0;
    let right = 0;
    
    while(left <= right){
        const curSum = sumArr[right] - sumArr[left];
        if(curSum === k){
            const curLength = right-1 - left;
            if(maxLength > curLength){
                maxLength = curLength
                answer = [left,right-1];
            }
        }
        if(curSum < k) right++;
        else left++;
    }
    
    return answer;
}