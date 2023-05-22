function solution(arrayA, arrayB) {

    // 오름차순으로 정렬하여 가장 작은 값이 0번 인덱스로 오도록 정렬한다
    // 이유는 1번 또는 2번 조건에 해당하는 값 a의 경우 해당 배열의 원소중 최솟값보다 작거나 같기 때문에
    // 해당검증을 순회하는 조건을, 배열의 원소중 가장 작은 값으로 시작하여 줄여나가는 방법을 사용하여
    // 효율성을 올리기 위해서이다.
    arrayA.sort((a, b) => a - b);
    arrayB.sort((a, b) => a - b);
    
    // curr.every를 통과한다면 현재 기준 배열의 모든 원소를 나눌 수 있는 수(최대공약수) 이다.
    // !target.some을 통과한다면 상대 배열의 모든 원소중 어느 하나라도 나눠지지 않았다는 뜻이다.
    // 즉 if문 안의 조건을 모두 만족한다면 조건 1또는 2를 만족하는 값 a이다.
    const findA = (curr, target) => {
        for (let i = curr[0]; i > 0; i--) {
            if (curr.every((v) => v % i === 0) && !target.some((v) => v % i === 0)) return i;
        }
        
        // 위의 조건문에 의해 for문이 종료되지 않은 경우 조건에 해당하는 값이 없다고 판단하고 0을리턴한다.
        return 0;
    };
    
    // 기준배열과 상대배열을 서로 반대로 지정하여 각각 findA 함수의 결과값을 받고 해당 값중 가장 큰 값을 반환한다.
    return Math.max(findA(arrayA, arrayB), findA(arrayB, arrayA));
}