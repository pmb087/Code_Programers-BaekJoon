function solution(before, after) {
    const sortedBefore = before.split('').sort();
    const sortedAfter = after.split('').sort();
    
    let answer = true;
    
    sortedBefore.forEach((el,i) => {
        if(el !== sortedAfter[i]) answer = false;        
    })
    
    return answer ? 1 : 0;
}