const solution = s => {
    let answer = s.length;
    
    for(let i = 1; i <= Math.floor(s.length/2); i++){
        let instance = '';
        
        for(let j = 0; j < s.length;){
            let count = 1;
            let curStr = s.slice(j,j+i);
            
            while(true){
                j += i;
                let targetStr = s.slice(j,j+i);
                if(curStr === targetStr) count++;
                else break;
            }
            
            instance += count >= 2 ? count + curStr : curStr;
        }
        answer = Math.min(answer, instance.length);
    }
    return answer;
}