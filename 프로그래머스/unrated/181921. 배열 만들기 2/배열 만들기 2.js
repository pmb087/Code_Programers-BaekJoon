// 주어진 숫자를 문자열로 변환하여 각 자릿수의 값이 모두 0과 5로 이뤄져있는지 boolean값을 리턴하는 함수
function isOkay(number){
    const curNum = number.toString().split('');
    let onlyFiveZero = true;

    for(let j = 0; j < curNum.length; j++){
        if(curNum[j] !== '5' && curNum[j] !== '0') onlyFiveZero = false;
    }

    if(onlyFiveZero) return true;
    return false;
}

///-----------------------------///
function solution(l, r) {
    let increment = 1;
    let start = -1;
    
    // 주어진 범위내에서 0과 5로만 이뤄진 가장 작은 값을 찾아서 start에 할당
    for(let i = l; i <= r; i++){
        if(i % 5 === 0) increment = 5;
            
        if(isOkay(i)){
            start = i;
            break;
        }
    }
    
    // 값을 찾지 못했다면 범위내에 조건을 만족하는 수가 없으므로 [-1] 리턴
    if(start === -1) return [start];
    
    // 정답 배열 선언
    const answer = [];
    
    // isOkay 함수에 조건을 만족하는 수만 push하여 리턴
    for(let i = start; i <= r; i +=5){
        if(isOkay(i)) answer.push(i);
    }  
    
    
    return answer;
}