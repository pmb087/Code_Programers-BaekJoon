function solution(array) {
    let stack = {};
    let answer = [];
    let maxCount = -1;
    
    array.forEach(el => {
        if(stack[el] === undefined) stack[el] = 1;
        else stack[el]++;
    })
    
    const stackArray = Object.entries(stack).map(el => [Number(el[0]),el[1]]);
    stackArray.forEach(el => {
        const [num, count] = el;
        
        if(count === maxCount) answer.push(num);
        else if(count > maxCount) {
            maxCount = count;
            answer = [num];
        }
        else{
            return;
        }
    })
    
    return answer.length > 1 ? -1 : answer[0];
}