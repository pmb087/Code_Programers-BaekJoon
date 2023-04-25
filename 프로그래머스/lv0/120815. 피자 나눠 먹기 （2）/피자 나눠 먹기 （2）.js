function solution(n) {
    let [min,max] = [Math.min(n,6),Math.max(n,6)]
    let Euclid = 0;
    while(true){
        const instance = max % min;
        if(instance === 0){
            Euclid = min;
            break;
        }
        max = min;
        min = instance;        
    }
    
    const LCM = Math.min(n,6) * Math.max(n,6) / Euclid;
    
    return LCM / 6
}