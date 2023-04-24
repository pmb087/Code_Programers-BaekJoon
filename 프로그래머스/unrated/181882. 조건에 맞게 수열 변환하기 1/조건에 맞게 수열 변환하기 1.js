function solution(arr) {
    arr = arr.map(number => {
        if(number >= 50 && number % 2 === 0) return number / 2;
        else if(number < 50 && number % 2 === 1) return number * 2;
        else return number;
    })
    
    return arr;
}