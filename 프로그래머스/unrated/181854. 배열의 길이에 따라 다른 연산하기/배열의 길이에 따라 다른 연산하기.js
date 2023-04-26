function solution(arr, n) {
    const isEven = arr.length % 2 === 0;
    
    if(isEven){
        const answer = arr.map((el,i) => i % 2 === 1 ? el + n : el);
        return answer;
    } else {
        const answer = arr.map((el,i) => i % 2 === 0 ? el + n : el);
        return answer;        
    }
}