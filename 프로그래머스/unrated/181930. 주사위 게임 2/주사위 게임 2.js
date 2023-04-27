function solution(a, b, c) {
    const min = () => (a + b + c)
    const middle = () => min() * (a**2 + b**2 + c**2)
    const max = () => middle() * (a**3 + b**3 + c**3);
    
    if(a === b && a === c) return max();
    else if(a === b || a === c || b === c) return middle();
    else return min();
}