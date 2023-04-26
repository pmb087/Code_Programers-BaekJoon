function solution(arr, queries) {
    let instance = [...arr];
    
    for(let i = 0; i < queries.length; i++){
        const [left, right] = queries[i];
        const temp = instance[left]
        instance[left] = instance[right];
        instance[right] = temp;
    }
    
    return instance;
}