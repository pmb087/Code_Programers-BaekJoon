function solution(participant, completion) {
    const n = participant.length;
    var answer = '';
    participant.sort();
    completion.sort();
    
    for(let i=0; i<n; i++){
        if(participant[i] != completion[i]){
            answer = participant[i];
            return answer;
        }
    }
}