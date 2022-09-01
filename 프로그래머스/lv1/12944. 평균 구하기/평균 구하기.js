function solution(arr) {
    let answer = 0;
    let average = 0;
    
    for(let i = 0; i < arr.length; i++){
        average += arr[i];
    }
    
    answer = average / arr.length;
    
    return answer;
}