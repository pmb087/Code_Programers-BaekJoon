function solution(dot) {
    let answer = [1,2,3,4];
    if(dot[0] > 0) answer = answer.filter(el => el === 1 || el === 4);
    else answer = answer.filter(el => el === 2 || el === 3);
    if(dot[1] > 0) answer = answer.filter(el => el < 3);
    else answer = answer.filter(el => el > 2);
    return answer[0];
}