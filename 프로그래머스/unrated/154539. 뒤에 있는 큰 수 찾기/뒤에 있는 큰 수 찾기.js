function solution(numbers) {
    // 뒷 큰수가 없는 경우 -1로 처리하는 과정을 스킵하며 배열을 미리 선언
    let answer = Array(numbers.length).fill(-1);
    
    // 뒷 큰수를 할당받기위해 대기중인 인덱스번호
    // for문이 종료되어도 stack에서 처리되지 못했다면 뒷 큰수가 없는것과 같으므로 -1로 종료
    const stack = [];
    
    // stack을 기준으로 동작하므로 모든 원소를 한 번만 확인하면 됨
    for(let i = 0; i < numbers.length; i++){
        
        // stack에 담긴 인덱스보다 현재 numbers의 원소가 크다면 뒷큰수가 존재함을 의미함
        // 이 경우 stack에서 해당 인덱스를 제거함과 동시에 answer의 해당 인덱스 위치에 뒷 큰수를 할당함
        while(stack && numbers[stack.at(-1)] < numbers[i]){
            answer[stack.pop()] = numbers[i];
        }
        
        // 이 코드가 while문 뒤에 오는 이유는 두가지임
        // 1. 현재 인덱스(i)가 0인 경우는 비교할 이전 대상이 없으므로 while문이 절대 동작할 수 없음
        // 2. 현재 인덱스(i)가 마지막인 경우는 뒷 큰수가 존재할 수 없으므로 무조건 -1로 끝나야 함.
        stack.push(i);
    }
    
    // 위의 과정을 모두 거쳤다면 뒷 큰수가 없는경우는 answer의 초기 fill값인 -1로 유지되며 문제 조건에 부합한 상태로 종료됨
    return answer;
}