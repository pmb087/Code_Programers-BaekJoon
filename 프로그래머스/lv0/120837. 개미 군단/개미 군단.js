function solution(hp) {
    let answer = 0;
    
    while(hp - 5 >= 0){
        hp -= 5;
        answer++;
    }
    
    while(hp - 3 >= 0){
        hp -= 3;
        answer++;
    }
    
    while(hp - 1 >= 0){
        hp -= 1;
        answer++;
    }
    
    return answer;
}