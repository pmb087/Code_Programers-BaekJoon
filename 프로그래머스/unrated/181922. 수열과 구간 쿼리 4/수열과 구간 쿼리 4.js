function solution(arr, queries) {
    let instance = [...arr];
    
    for(let i = 0; i < queries.length; i++){
        instance = instance.map((num,index) => {
            const [start,end,k] = queries[i];
            if(start <= index && index <= end && index % k === 0) return num + 1;
            return num;
        })
    }
    
    return instance;
}