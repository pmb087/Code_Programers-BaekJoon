function solution(arr, intervals) {
    const left = arr.slice(intervals[0][0],intervals[0][1]+1);
    const right = arr.slice(intervals[1][0],intervals[1][1]+1);
    
    return left.concat(right);
}