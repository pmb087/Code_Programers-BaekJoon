function solution(arr, k) {
    if(k % 2 === 1) {
        arr = arr.map(number => number * k);
        return arr;
    } else {
        arr = arr.map(number => number + k);
        return arr;
    } 
}