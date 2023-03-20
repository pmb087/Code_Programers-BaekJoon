function solution(queue1,queue2){
    const q = [...queue1, ...queue2];
    const target = q.reduce((acc,cur) => acc+cur) / 2

    let i = 0;
    let j = queue1.length;
    
    let current = queue1.reduce((acc,cur) => acc+cur)
    let count = 0

    while (i < q.length && j < q.length){      
        if (current === target) return count
        else if (current < target && j < q.length - 1){
            current += q[j]
            j += 1
        } else {
            current -= q[i]   
            i += 1         
        }
        count += 1
    }

    return -1
}