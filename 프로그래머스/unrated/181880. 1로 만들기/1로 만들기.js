function solution(num_list) {
    let answer = 0;
    
    for(let i = 0; i < num_list.length; i++){
        let curNum = num_list[i];
        
        while(true){
            if(curNum === 1) break;
            if(curNum % 2 === 0){
                curNum = curNum / 2;
                answer++;
            } else {
                curNum--;
                curNum = curNum / 2;
                answer++;
            }
        }
    }
    
    return answer;
}