const solution = storey => {
    let answer = 0
    while(storey !== 0){
        // 현재 가장 작은 자릿수의 값
        const n = storey % 10;

        // n이 6 이상일 경우 +를 통해 다음 자릿수를 올리는 방법이 더 빠른 결과를 도출
        if (n >= 6){
            storey += 10 - n;
            answer += 10 - n;
        // n이 5일경우 다음 자릿수의 값이 5이상이면 +를 하는 것이 더 빠름
        } else if(n === 5 && Math.floor(storey / 10) % 10 >= 5){
            storey += 10 - n
            answer += 10 - n
        // n이 5이며 다음 자릿수의 값이 5미만인 경우
        // n이 5미만인 경우는 n만큼 -하는 것이 더 빠름
        } else{
            answer += n
            storey = Math.floor(storey / 10);
        }
    }
    
    return answer
}