function solution(n, m, section) {
    let wall = Array(n).fill().map((_,i) => !section.includes(i+1));
    
    let count = 0;
    section.forEach(el => {
        if(!wall[el - 1]){
            for(let i = 0; i < m; i++){
                wall[el - 1 + i] = true;                
            }
            count++;
        }
    })
    
    return count
}