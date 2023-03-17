// 내가 푼거 => O(n^2)라서 토핑 길이가 1,000,000이 최대인 조건상 무조건 시간초과
// function solution(topping) {
//     let count = 0;
    
//     function isCountable(index){
//         const [left, right] = [topping.slice(0,index),topping.slice(index)];
//         const leftSet = new Set(left);
//         const rightSet = new Set(right);
        
//         if(leftSet.size === rightSet.size) count++;
//     }
    
//     for(let i = 1; i < topping.length; i++) isCountable(i);
    
//     return count;
// }

function solution (T) {
    const toppingMap = new Map();
    
    T.forEach(topping => {
        if(toppingMap.get(topping) === undefined) {
            toppingMap.set(topping, {count: 1, brotherHas: false})
        } else {
            const instance = toppingMap.get(topping);
            instance.count++;
            toppingMap.set(topping,instance);
        }
    })
    
    let [brother, me] = [0, toppingMap.size];
    let answer = 0;
    
    for(let i = 0; i < T.length; i++){
        const current = toppingMap.get(T[i]);
        
        if(current.count >= 1){
            current.count--;
            
            if(current.count === 0){
                me--;
            }
        }
        
        if(!current.brotherHas){
            current.brotherHas = true;
            brother++;
        }
        
        if(me === brother) answer++;
        toppingMap.set(T[i], current)
    }
    
    return answer;
}