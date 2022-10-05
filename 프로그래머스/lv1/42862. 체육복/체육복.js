function solution(n, lost, reserve) {
    
    let student = [];
    let answer = 0;    
    let have = [];
    
    for(let i = 0; i < n; i++){
        student.push(i+1);
        have.push(1);
    }
    
    for(let i = 0; i < student.length; i++){
        for(let j = 0; j < lost.length; j++){
            if(student[i] === lost[j]){
                have[i]--;
            }
        }
        for(let j = 0; j < reserve.length; j++){
            if(student[i] === reserve[j]){
                have[i]++;
            }
        }
    }
    
    if((have[0] == 2) && (have[1] == 0)){
        have[0] = 1;
        have[1] = 1;
    }
    
    for(let i = 1; i < (have.length - 1); i++){
        if((have[i] == 2) && (have[i-1] == 0)){
            have[i] = 1;
            have[i-1] = 1;
        } else if((have[i] == 2) && (have[i+1] == 0)){
            have[i] = 1;
            have[i+1] = 1;
        }
    }
    
    if((have[have.length - 1] == 2) && (have[have.length - 2] == 0)){
        have[have.length - 1] = 1;
        have[have.length - 2] = 1;        
    }
    
    for(let i = 0; i < have.length; i++){
        if((have[i] == 1) || (have[i] == 2)) answer++;
    }
    
    return answer;
}