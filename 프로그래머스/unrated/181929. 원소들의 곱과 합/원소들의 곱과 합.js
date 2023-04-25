function solution(numList) {
    const multiply = numList.reduce((acc,cur) => acc * cur);
    const square = numList.reduce((acc,cur) => acc + cur) ** 2;
    
    return multiply < square ? 1 : 0;
}