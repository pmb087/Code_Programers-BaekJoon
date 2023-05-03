function solution(chicken) {
    let instance = chicken;
    let answer = 0;
    
    while(instance >= 10){
        const curService = Math.floor(instance / 10);
        answer += curService;
        instance = (instance % 10) + curService;
    }
    
    return answer;
}