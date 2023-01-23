function solution(E) {
    let total = [...E,E.reduce((acc,cur)=>acc+cur,0)];
    for(let i = 1; i < E.length-1; i++){
        for(let j = 0; j < E.length; j++){
            let curSum = 0;
            for(let k = j; k < j+i+1; k++){
                curSum += E[k % E.length];
            }
            total.push(curSum);
        }   
    }
    return new Set(total).size
}