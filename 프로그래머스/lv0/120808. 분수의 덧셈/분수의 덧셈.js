function solution(numer1, denom1, numer2, denom2) {
    
    // 최대공약수 유클리드호제법
    function greatest(a, b) {
        if (b === 0) return a;
        return greatest(b, a % b);
    }
    
    // GCD = 최대공약수, LCM = 최소공배수
    const GCD = greatest(Math.min(denom1, denom2), Math.max(denom1, denom2));
    const LCM = denom1 * denom2 / GCD;
    
    // 통분, 분모는 이제 서로 같으니 하나만 사용
    numer1 = numer1 * (LCM / denom1);
    numer2 = numer2 * (LCM / denom2);
    
    const newNumer = numer1 + numer2;
    const newDenom = denom1 * (LCM / denom1);
    
    // 기약분수로 만들기 위해 분모와 분자의 최대공약수 계산
    const newGCD = greatest(Math.min(newNumer, newDenom), Math.max(newNumer, newDenom));
    
    // 마지막으로 기약분수의 분모와 분자를 확정
    const finalNumer = newNumer / newGCD;
    const finalDenom = newDenom / newGCD;
    
    return [finalNumer, finalDenom];
    
}