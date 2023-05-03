function solution(arr) {
    let pos = [];
    
    arr.forEach((el,i) => {
        if(el === 2) pos.push(i);
    })
    
    if(pos.length === 0) return [-1];
    else return arr.slice(pos[0],pos[pos.length-1]+1);
}