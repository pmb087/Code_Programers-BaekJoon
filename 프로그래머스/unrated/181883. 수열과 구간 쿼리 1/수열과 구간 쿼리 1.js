function solution(arr, queries) {
    let copy = [...arr]
    
    for(let i = 0; i < queries.length; i++){
        const [start,end] = queries[i];
        
        for(let j = start; j <= end; j++) copy[j]++;
    }
    
    return copy
}