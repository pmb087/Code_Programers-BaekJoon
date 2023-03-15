function solution(orders, course) {
    orders = orders.map(el => el.split('').sort());
    let totalObj = {};

    function search(curStr,curListIdx,curIdx,targetLength,listLength){
        if(curStr.length === targetLength){
            if(totalObj[`${curStr}`] === undefined){
                totalObj[`${curStr}`] = 1;
            } else {
                totalObj[`${curStr}`]++;
            }
            return;
        }
        for(let i = curIdx + 1; i <= listLength - (targetLength - curStr.length); i++){
            search(curStr + orders[curListIdx][i], curListIdx, i, targetLength, listLength)
        }
    }
    course.forEach(targetLength => {
            orders.forEach((list,idx) => {
                for(let i = 0; i <= list.length - targetLength; i++){
                    search(list[i], idx, i, targetLength, list.length);
                }
            })
    })    
    
    const answer = [];
    
    course.forEach(targetLength => {   
            let instance = [];
            let max = 0;
        
            Object.entries(totalObj).filter(list => list[0].length === targetLength).forEach(el => {
                const [str, count] = el;

                if(count === max && count > 1) instance.push(str);
                else  if(count > max && count > 1){
                    instance = [];
                    max = count;
                    instance.push(str);
                }
            });
            answer.push(...instance);
    })
    

    
    return answer.sort();
}