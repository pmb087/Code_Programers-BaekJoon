function solution(arr, flag) {
    const answer = [];
    
    flag.forEach((el,index) => {
        if(el) for(let i = 0; i < arr[index] * 2; i++) answer.push(arr[index]);
        else for(let i = 0; i < arr[index]; i++) answer.pop();
    })
    
    return answer;
}