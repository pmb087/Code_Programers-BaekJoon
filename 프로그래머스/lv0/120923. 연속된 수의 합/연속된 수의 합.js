function solution(num, total) {
    const answer = [];
    if(num % 2 === 0){
        let middleLeft = Math.floor(total / num);
        let middleRight = Math.floor(total / num) + 1;
        answer.push(middleLeft);
        answer.push(middleRight);
        
        let numElse = (num - 2) / 2;
        
        while(numElse > 0){
            middleLeft--;
            middleRight++
            answer.push(middleLeft);
            answer.push(middleRight);
            numElse--;
        }        
    } else {
        const middle = total / num;
        answer.push(middle);
        
        let numElse = (num - 1) / 2;
        let diff = 0;
        
        while(numElse > 0){
            diff++;
            answer.push(middle + diff);
            answer.push(middle + (diff * -1));
            numElse--;
        }
    }
    
    return answer.sort((a,b)=>a-b)
}