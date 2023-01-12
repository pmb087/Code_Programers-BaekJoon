function solution(p, l) {
    let count = 0;
    while(true){
        if(p[0] !== Math.max(...p)){
            p.push(p.shift());
            if(l === 0){
                l = p.length -1;
            } else{
                l--;
            }
        } else {
            p.shift();
            count++
            if(l === 0){
                break;
            } else {
                l--;
            }
        }
    }
    return count;
}