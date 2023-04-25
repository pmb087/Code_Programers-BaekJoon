function solution(a, b) {
    const sumA = Number(a + '' + b);
    const sumB = Number(b + '' + a);
    
    return Math.max(sumA,sumB);
}