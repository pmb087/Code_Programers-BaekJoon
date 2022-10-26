

function solution(lottos, win_nums) {
    
    const rank = {
        6 : 1,
        5 : 2,
        4 : 3,
        3 : 4,
        2 : 5,
        1 : 6,
        0 : 6
    }
    
    let answer = 0;
    let answerArr = [];
    
    lottos.forEach(el => {
        if(win_nums.includes(el) || el === 0) answer++
    })   
    
    answerArr.push(answer);
    answer = 0;
    
    lottos.forEach(el => {
        if(win_nums.includes(el)) answer++
    })   
    
    answerArr.push(answer);    
    
    return answerArr.map(el=> rank[`${el}`]);
}