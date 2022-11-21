function solution(a, b, n) {
    let stock = n;
    let coke = 0;
    while ((stock / a) >= 1){
        let count = Math.floor(stock / a);
        coke += count * b;
        stock = (stock - (count * a)) + (count * b);        
    }
    return coke;
}