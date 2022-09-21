const solution = (left,right) => {
    let answer = 0;
    let arr = Array(right-left+1).fill().map((_,i)=>i+left);
    arr.forEach((el,i)=>{
        let count = 0;
        for(let acc = 1; acc <= el; acc++){
            if(el % acc === 0) count++;
        }
        count % 2 === 0 ? answer += el : answer -= el;
        count = 0;
    })
    return answer;
}