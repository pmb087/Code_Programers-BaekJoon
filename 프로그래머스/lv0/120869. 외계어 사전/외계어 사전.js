function solution(spell, dic) {
    let answer = false;
    
    for(let i = 0; i < dic.length; i++){
        const curDic = dic[i].split('');
        
        let checkObj = {}        
        for(let j = 0; j < spell.length; j++) checkObj[spell[j]] = 0;
        
        curDic.forEach(el => {
            if(checkObj[el] === undefined) return;
            else checkObj[el]++;
        })
        
        if(Math.min(...Object.values(checkObj)) !== 0) {
            answer = true;
            break;
        }
    }
    
    return answer ? 1 : 2;
}