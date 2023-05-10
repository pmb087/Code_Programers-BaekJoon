function solution(common) {
    const diff = common[1] - common[0];
    const times = common[1] / common[0];
    
    let isDiff = true;
    let isTimes = true;
    
    for(let i = 1; i < common.length - 1; i++){
        if(!isDiff || !isTimes) break;
        
        const curNum = common[i];
        const nextNum = common[i+1];
        
        if(nextNum - curNum !== diff) isDiff = false;
        if(nextNum / curNum !== times) isTimes = false;
    }
    
    if(isDiff) return common[common.length - 1] + diff;
    else return common[common.length - 1] * times;
}