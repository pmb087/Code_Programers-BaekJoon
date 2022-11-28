function counting (arg,limit,power) {
    let cnt = 0;
    for (let i = 1; i <= Math.sqrt(arg); i++){
        if (arg % i == 0) {
            if (arg / i == i)
                cnt++;
            else 
                cnt = cnt + 2;
        }
    }
    return cnt > limit ? power : cnt;
}


function solution(number, limit, power) {
    let count = 0;
    for (let i = 1; i <= number; i++) {
        count += counting(i,limit,power);
    }
    return count;
}