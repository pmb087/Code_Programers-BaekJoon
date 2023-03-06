function solution(t, p) {
    let answer = 0;
    let sliced = [];
    const repeat = t.length - (p.length - 1);
    for(let i = 0; i < repeat; i++){
        sliced.push(t.slice(i,i + p.length));
    }
    sliced.forEach(el => {
        if(Number(el) <= Number(p)) answer++;
    })
    return answer;
}