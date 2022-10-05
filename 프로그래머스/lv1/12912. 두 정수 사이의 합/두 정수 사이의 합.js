function solution(a, b) {
    
    let answer = 0;
    let diff;
    let min;
    
    a-b > 0 ? (diff = a-b, min = b) : (diff = b-a, min = a) ;
    
    let arr = Array(diff+1).fill().map((el,i)=> i+min)
    
    if(arr.length === 1) return arr[0];
    
    arr.forEach((el,i)=> {
        answer += el
    })
    return answer;
}