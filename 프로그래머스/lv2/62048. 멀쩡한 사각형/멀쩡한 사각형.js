function solution(w, h) {
    function uclid(a,b){
        let [big,small] = [Math.max(a,b),Math.min(a,b)];
        let current = 0;
        
        while(small !== 0){
            let temp = big % small;
            current = small;
            big = small;
            small = temp;
        }
        
        return current;
    }
    
    const answer = w * h - (w + h - uclid(w,h))
    
    return answer
}