// function solution(arr) {
//     // 모든 숫자가 1또는 0일경우 바로 제출
//     if (arr.every(row => row.every(cell => cell === 0))) return [1, 0];
//     if (arr.every(row => row.every(cell => cell === 1))) return [0, 1];
    
//     // 그렇지 않은경우 얼리리턴이 발동하지 않았으므로 사분면을 splice 메서드로 분할
//     const len = arr.length,
//         q1 = arr.splice(0, len/2),
//         q2 = q1.map(row => row.splice(len/2, len/2)),
//         q3 = arr,
//         q4 = q3.map(row => row.splice(len/2, len/2));
    
//     // 나눠진 4분면을 각 원소로 가지는 전체 배열을 Reduce메서드로 실행하는데 로직은 아래와 같음
//     //   - 각 사분면에 대해서 solution함수를 재귀적으로 실행함
//     //   - 최종적으로 분할 된 또는 병합 된 각각의 쿼드압축 배열에 존재하는 0과 1의 갯수가 Reduce를 통해 전부 합쳐짐
//     return [q1,q2,q3,q4].reduce((ans, x) => solution(x).map((d, i) => d + ans[i]), [0, 0]);
// }

function solution (arr) {
    if(arr.every(row => row.every(el => el === 0))) return [1,0];
    if(arr.every(row => row.every(el => el === 1))) return [0,1];
    
    const harf = arr.length / 2,
          q1 = arr.splice(0, harf),
          q2 = q1.map(el => el.splice(harf, harf)),
          q3 = arr,
          q4 = q3.map(el => el.splice(harf, harf));
    
    return [q1, q2, q3, q4].reduce((acc, cur) => solution(cur).map((el,i) => el + acc[i]), [0,0]);
}
    