function solution(i, j, k) {
    function includesCount(num){
        const convertedStr = num.toString().split('').map(el => Number(el));
        let count = 0;
        
        convertedStr.forEach(el => {
            if(el === k) count++;
        })
        
        return count;
    }
    
    let answer = 0;
    
    for(let start = i; i <= j; i++) answer += includesCount(i)
    
    return answer;
}