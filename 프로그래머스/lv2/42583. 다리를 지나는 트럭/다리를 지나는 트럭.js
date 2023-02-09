function solution(BL, BW, TW) {
    const onBridge = Array(BL).fill(0);
    let answer = 0;
    
    while(TW.length > 0){
        if((onBridge.reduce((acc,cur)=>acc+cur,0) - onBridge[0] + TW[0]) <= BW){
            onBridge.push(TW.shift());
            onBridge.shift();
            answer++;
        } else {
            onBridge.push(0);
            onBridge.shift();
            answer++;            
        }
    }
    return (answer + BL);
}