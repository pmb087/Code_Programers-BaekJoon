function solution(arr, k) {
    const answer = [];
    
    for(let i = 0; i < arr.length; i++){
        if(!answer.includes(arr[i])) answer.push(arr[i]);
        if(answer.length === k) break;
    }
    
    if(answer.length < k){
        const diff = k - answer.length;
        
        for(let i = 0; i < diff; i++) answer.push(-1);
    }
    
    return answer;
}