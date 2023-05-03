function solution(arr, queries) {
    const answer = [];
    
    for(let i = 0; i < queries.length; i++){
        let instance = Infinity;
        const [start,end,k] = queries[i];
        arr.forEach((el,index) => {
            if(start <= index && index <= end && el > k){
                instance = Math.min(instance, el);
            }
        })
        if(instance === Infinity) answer.push(-1)
        else answer.push(instance);
    }
    
    return answer;
}