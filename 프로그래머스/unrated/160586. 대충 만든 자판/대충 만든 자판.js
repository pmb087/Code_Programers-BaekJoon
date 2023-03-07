function solution(keymap, targets) {    
    const answerCountArr = [];
    let currentCountArr = [];
    let currentAnswer = [];
    
    targets.forEach(target => {        
        target.split("").forEach(targetSpell => {               
            keymap.forEach((key,index) => {
                const curCount = key.indexOf(targetSpell);
                if(curCount === -1) return;
                currentAnswer.push(curCount + 1);
            })            
            if(currentAnswer.length < 1) currentCountArr.push(-1)
            else currentCountArr.push(Math.min(...currentAnswer));
            currentAnswer = [];
        })
        if(Math.min(...currentCountArr) === -1) answerCountArr.push(-1);
        else answerCountArr.push(currentCountArr.reduce((acc,cur)=>acc+cur));
        currentCountArr = [];
    })
    
    return answerCountArr;
}