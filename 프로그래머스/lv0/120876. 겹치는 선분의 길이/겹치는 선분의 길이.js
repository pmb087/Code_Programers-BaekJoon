function solution(lines) {
    let lineStack = {};
    
    lines.forEach(line => {
        const [start,end] = line;
        
        for(let i = start; i < end; i++){
            const include = i + 0.5;
            
            if(lineStack[`${include}`] === undefined) lineStack[`${include}`] = 1;
            else lineStack[`${include}`]++;
        }
    })
    
    return Object.values(lineStack).filter(stack => stack >= 2).length;
}