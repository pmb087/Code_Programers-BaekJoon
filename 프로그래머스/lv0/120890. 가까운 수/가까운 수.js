function solution(array, n) {
    let diff = Infinity;
    let answer = array[0]
    
    array.forEach(num => {
        const curDiff = Math.abs(num - n);
        if(diff > curDiff) {
            diff = curDiff;
            answer = num;
        } else if(diff === curDiff){
            answer = Math.min(answer,num)
        }
    })
    
    return answer;
}