function solution(cards) {
    let copy = [...cards];
    
    const answer = [];
    while(copy.length > 0){
        let instance = [copy[0]];
        let curIdx = copy[0] - 1;
        
        while(!instance.includes(cards[curIdx])){
            instance.push(cards[curIdx]);
            curIdx = cards[curIdx] - 1;
        }

        answer.push(instance);
        copy = copy.filter(el => !instance.includes(el));
    }
    
    answer.sort((a,b) => b.length - a.length);
    
    if(answer[0].length === cards.length) return 0;
    else return answer[0].length * answer[1].length;
}