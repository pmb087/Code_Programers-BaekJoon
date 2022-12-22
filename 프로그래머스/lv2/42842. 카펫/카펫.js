function solution(b, y) {
    let Ypositive = [];
    let answer = [];
    for(let i = 1; i<= y; i++){
        if(y % i === 0){
            if(y / i < i) break;
            Ypositive.push([y/i, i]);
        }
    }
    for(let j = 0; j < Ypositive.length; j++){
        const instanceArr = Ypositive[j].map(el=>el+2);
        if(instanceArr[0] * instanceArr[1] - y === b){
            answer.push(...instanceArr);
            break;
        }
    }
    return answer;
}