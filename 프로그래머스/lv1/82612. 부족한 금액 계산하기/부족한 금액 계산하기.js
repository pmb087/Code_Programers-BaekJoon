const solution = (price,money,count) => {
    const factorial = n => {
        if(n < 1) return 0;
        return n + factorial(n-1);
    }
    const answer = money - price * factorial(count);
    
    return answer < 0 ? -answer : 0;
}