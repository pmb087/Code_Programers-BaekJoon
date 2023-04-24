function solution(number, n, m) {
    if(number % n === 0 && number % m === 0) return 1;
    return 0;
}