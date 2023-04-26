function solution(s) {
    const arr = s.split(' ');
    
    let answer = 0;
    
    arr.forEach((el,i) => {
        if(el === 'Z') answer -= Number(arr[i-1]);
        else answer += Number(el)
    })
    
    return answer;
}