function solution(s) {
    s = s.split('');
    let answer = [];
    s.forEach((el,idx)=>{
        if(idx === 0){
            answer.push(-1);
            return;
        }
        let instance = idx;
        while(instance > 0){
            instance--;
            if(el === s[instance]){
                answer.push(idx-instance);
                break;
            }
            if(instance === 0){
                answer.push(-1);
                break;
            }
        }
    });
    return answer;
}