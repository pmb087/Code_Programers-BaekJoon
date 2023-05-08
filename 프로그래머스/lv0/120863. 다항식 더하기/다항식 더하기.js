function solution(polynomial) {
    const splited = polynomial.split(' + ');
    
    let xSum = 0;
    let sum = 0;
    
    for(let i = 0; i < splited.length; i++){
        const curNum = splited[i];
        
        if(curNum[0] === 'x') xSum++;
        else if(curNum[curNum.length - 1] === 'x'){
            const instance = curNum.split('').slice(0,curNum.length-1).join('');
            xSum += Number(instance);
        } else sum += Number(curNum)        
    }
    
    const answer = (xSum > 0 ? (xSum === 1 ? '' : xSum) + 'x' : '') + (sum > 0 ? (xSum > 0 ? ` + ${sum}` : sum) : '');
    
    return answer;
}