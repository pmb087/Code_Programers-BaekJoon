function solution(arr1, arr2) {
    const m = arr1.length;
    const n = arr2.length;
    let answer = [];
    for(let i = 0; i < m; i++){
        let answerChild = [];
        for(let j = 0; j < arr2[0].length; j++){
            let sum = 0;
            for(let k = 0; k < n; k++){
                sum += arr1[i][k] * arr2[k][j]
            }
            answerChild.push(sum);
        }
        answer.push(answerChild);
    }
    return answer;
}