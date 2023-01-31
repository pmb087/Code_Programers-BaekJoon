function solution(want, number, discount) {
    const wantObj = {};
    
    want.forEach((el,i) => {
        wantObj[el] = number[i]
    })
    
    let answer = 0;
    let pass = true;
    
    for(let i = 0; i < discount.length - 9; i++){
        let instance = {...wantObj};
        
        for(let j = 0; j < 10; j++) if(instance[discount[i+j]] !== undefined) instance[discount[i+j]] -= 1;
        
        Object.values(instance).forEach(el => {
            if(el > 0) pass = false;            
        })
        
        if(pass)  answer++;
        
        pass = true;
    }
    
    return answer;
}