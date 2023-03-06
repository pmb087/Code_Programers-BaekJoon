function solution(cards1, cards2, goal) {
    let answer = 0;
    goal.forEach(el => {
        if(cards1[0] === el){
            cards1.shift();
            answer++;
        } else if (cards2[0] === el){
            cards2.shift();
            answer++;
        }            
    })
    if(answer === goal.length) return "Yes"
    else return "No"
}