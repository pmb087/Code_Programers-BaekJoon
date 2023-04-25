function solution(numbers) {
    const [minL,minR] = numbers.sort((a,b)=>a-b).slice(0,2);
    const [maxL,maxR] = numbers.sort((a,b)=>a-b).slice(numbers.length-2);
    
    const minResult = minL * minR;
    const maxResult = maxL * maxR;
    
    return minResult >= maxResult ? minResult : maxResult;
}