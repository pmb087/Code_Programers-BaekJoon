function solution(s) {
    s = s.split('');
    if(s.length === 1) return 1;
    let temp = s.shift();
    let count = 1;
    let answer = 0;
    for(let i = 0; i < s.length; i++){
        if(i+1 === s.length) {
            answer++;
            // console.log(i+1,'.마지막 인덱스 : ',temp,s[i],count,answer)
            break;
        }
        if(s[i] === temp){
            count++;
            // console.log(i+1,'.카운트 플러스 : ',temp,s[i],count,answer)
            continue;   
        }else if(s[i] !== temp){
            count--;
            // console.log(i+1,'.카운트 마이너스 : ',temp,s[i],count,answer)
            if(count === 0){
                answer++;
                temp = s[i+1]
                count=0;
                // console.log(i+1,'.카운트 제로 : ',temp,s[i],count,answer)
                continue;
            }
            continue
        }
    }
    return answer;
}