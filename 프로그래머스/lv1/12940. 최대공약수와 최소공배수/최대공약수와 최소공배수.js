function solution(n, m) {
    let answer = [];
    let beforeAnswer = [];
    let nNum = [];
    let mNum = [];
    
    // n의 약수 배열 push
    for(let i = 1; i <= n; i++){
        if((n % i) === 0) nNum.push(i);
    }
    console.log(nNum)
    // m의 약수 배열 push 
    for(let i = 1; i <= m; i++){
        if((m % i) === 0) mNum.push(i);
    }
    console.log(mNum)
    // 약수 배열끼리 원소 비교해서 최대 공약수 beforeAnswer배열에 push
    for(let j = 0; j < nNum.length; j++){
        for(let k = 0; k < mNum.length; k++){
            console.log(nNum[j] , mNum[k])
            if(nNum[j] === mNum[k]) beforeAnswer.push(nNum[j]);
            console.log(beforeAnswer);
        }
    }
    
    // beforeAnswer 배열의 마지막(최대공배수) 를 answer 배열에 push
    answer.push(beforeAnswer[beforeAnswer.length - 1]);
    
    // 최소공배수는 최소공약수 * 최소공약수로 첫 숫자를 나눈 값 * 최소공약수로 두 번째 숫자를 나눈 값 
    const max = (answer[0] * (n / answer[0]) * (m / answer[0]))
    
    // answer 배열에 최소 공배수 push
    answer.push(max);
    
    // return
    return answer;
}