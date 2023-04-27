function solution(a, d, included) {
    const numArr = [];
    let curNum = a;
    
    for(let i = 0; i < included.length; i++){
        numArr.push(curNum);
        curNum += d;
    }
    
    const answerArr = numArr.filter((_,i) => included[i]);
    
    return answerArr.reduce((acc,cur) => acc+cur);
}