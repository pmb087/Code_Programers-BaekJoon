function solution(p, s) {
    let count = 0;
    let answer = [];
    while(p.length > 0 || count !== 0){
        if(p[0] >= 100){
            p.shift();
            s.shift();
            count++
            continue;
        }
        if(count !== 0){
            answer.push(count);
            count = 0;
        }
        p = p.map((el,i) => el+s[i]);
        console.log(count,answer,p)
    }
    return answer;
}