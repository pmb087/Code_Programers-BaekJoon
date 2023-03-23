function solution(expression) {
    // 0 ~ 9에 현재 expression의 문자가 포함되는지 체크하기 위해 선언
    const numArr = '0123456789';
    
    // 부호를 만난 경우 앞의 숫자, 부호를 해당 배열에 push
    const expressionArr = [];
    
    // 부호를 만난 경우 currentIndex를 기준으로 숫자를 slice하기 위해서 선언, slice 이후 해당 값을 업데이트함
    let currentIndex = 0;
    
    // expression을 전부 순회하며 부호를 기준으로 값을 잘라서 배열에 push한다
    for(let i = 0; i < expression.length; i++){
        if(!numArr.includes(expression[i])){
            expressionArr.push(Number(expression.slice(currentIndex,i)));
            expressionArr.push(expression.slice(i,i+1));
            currentIndex = i + 1;
        }
    }
    
    // expressionArr의 원소를 통해 연산을 수행하기 때문에 연산부호가 문자열이다, 이걸 수식으로 수행해서 리턴한다
    function calculate(num1, num2, sign){
        if(sign === '*') return (num1 * num2);
        if(sign === '+') return (num1 + num2);
        if(sign === '-') return (num1 - num2);
    }
    
    // 위의 for문 구조상 마지막 숫자는 추가할 수 없기 때문에 마지막 숫자를 직접 추가해준다
    expressionArr.push(Number(expression.slice(currentIndex)));
    
    // 부호의 우선순위에 따른 6가지 방법을 나열
    const calcWays = [['*','+','-'],['*','-','+'],['+','*','-'],['+','-','*'],['-','*','+'],['-','+','*']];
    
    // 각각의 우선순위에 따른 최종 금액을 push할 배열
    const totalArr = [];
    
    // 6가지의 우선순위 배열의 원소를 순회한다
    calcWays.forEach(calc => {
        
        // 숫자와 부호를 구분해서 push해놓은 배열을 복사한다
        let instance = [...expressionArr];
        
        // 하나의 우선순위에 존재하는 3가지 부호를 순서대로 순회한다
        calc.forEach(arr => {
            
            // 현재 확인중인 부호가 더이상 수식 배열에 없을 때 까지 아래의 연산을 수행한다.
            while(instance.includes(arr)){
                
                // 현재 확인중인 부호가 하나보다 많더라도 indexOf의 메서드 특성 상 먼저찾은 (제일 앞의) 인덱스를 반환한다
                const curIdx = instance.indexOf(arr);
                
                // 부호의 인덱스 전후의 숫자를 가지고 연산을 수행한 뒤 도출된 값을 [숫자, 부호, 숫자] => [도출된 값] 으로 대치한다.
                const sum = calculate(instance[curIdx - 1],instance[curIdx + 1],instance[curIdx]);
                if(curIdx + 2 > instance.length - 1){
                    instance = [...instance.slice(0,curIdx - 1),sum];
                } else {
                    instance = [...instance.slice(0,curIdx - 1),sum, ...instance.slice(curIdx + 2)]                    
                }
            }
        })
        
        // 총 6개의 우선순위 조합중 하나가 완료 될 때 마다 최종 계산값을 push한다.
        totalArr.push(instance[0])
    })
    
    // 문제의 조건에 의하면 최종 결과값이 음수로 도출될 경우 절대값으로 치환한다.
    const answer = totalArr.map(total => Math.abs(total));
    
    // 모든 계산이 종료되고 얻은 값들 중 가장 큰 값을 찾아서 반환한다.
    return Math.max(...answer);
}