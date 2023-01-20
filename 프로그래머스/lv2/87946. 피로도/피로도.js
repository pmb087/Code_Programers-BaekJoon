function solution (k,d) {
    let visit = [];
    let max=0;
    
    function dfs(curIdx, curk, curMax) {
        visit[curIdx]=true;
        curk -= d[curIdx][1];
        for(let i = 0; i < d.length; i++){
            if(!visit[i] && d[i][0] <= curk) dfs(i,curk,curMax+1);
        } 
        max = Math.max(curMax,max);
        visit[curIdx]=false;
    }
    
    for(let i=0; i<d.length; i++){
        if(k>=d[i][0]) dfs(i,k,1);
    }
    
    return max; 
}
