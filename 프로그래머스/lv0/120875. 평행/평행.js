function solution(dots) {
    const cases = [
        [[0,1],[2,3]],
        [[0,2],[1,3]],
        [[0,3],[1,2]]
    ];
    
    let parallel = false;
    
    for(let i = 0; i < cases.length; i++){
        if(parallel) break;
        
        const [A,B] = cases[i];
        
        const lineA = (dots[A[0]][1] - dots[A[1]][1]) / (dots[A[0]][0] - dots[A[1]][0])
        const lineB = (dots[B[0]][1] - dots[B[1]][1]) / (dots[B[0]][0] - dots[B[1]][0])
        
        if(lineA === lineB) parallel = true;        
    }
    
    return parallel ? 1 : 0;
}