function solution(arr, divisor) {
    let answer = [];
    arr.forEach((el,i)=>{
        if(el % divisor === 0) answer.push(el)
    })
    if(answer.length < 1) return [-1]
    return answer.sort((a,b)=>{
        if(a>b) return 1
        if(a<b) return -1
        if(a=b) return 0
    });
}