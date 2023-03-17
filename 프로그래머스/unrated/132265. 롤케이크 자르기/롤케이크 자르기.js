// 내가 푼거 => O(n^2)라서 토핑 길이가 1,000,000이 최대인 조건상 무조건 시간초과
function solution(topping) {
    let count = 0;
    
    // 인자로 받은 인덱스를 기준으로 토핑 배열을 좌, 우로 나누고 
    // 각각 생성된 배열을 Set으로 만들어서 중복을 제거한 뒤 size를 비교하는 방법
    function isCountable(index){
        const [left, right] = [topping.slice(0,index),topping.slice(index)];
        const leftSet = new Set(left);
        const rightSet = new Set(right);
        
        if(leftSet.size === rightSet.size) count++;
    }
    
    // 토핑 배열의 길이만큼 반복하며 인덱스를 인자로 넘겨서 isCountable을 실행
    for(let i = 1; i < topping.length; i++) isCountable(i);
    
    return count;
}

// 힌트 보고 다시푼거 => 2중 for문에서 for문 두개로 나눴음 => O(n^2) 에서 O(2n)됨
function solution (T) {
    const toppingMap = new Map();
    
    // 처음에 토핑을 형이 전부 가지고 있다고 가정해서 Map을 구현함
    // 때문에 토핑이 여러번 나오면 그 토핑의 count는 계속 올리지만 brotherHas는 항상 false
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
        
        // 형이 가진 현재 토핑의 갯수가 1개 이상이라면 count--
        // (동생에게 해당 토핑을 줬다고 생각하면 됨)
        if(current.count >= 1){
            current.count--;
            
            // count-- 로 인해서 형이 가진 현재 토핑의 갯수가 0이 됐다면
            // me-- (me는 내가 가진 토핑의 종류 수인데 갯수가 0이 되었으니 종류가 하나 줄어든 것)
            if(current.count === 0){
                me--;
            }
        }
        
        // 만약 brotherHas 즉 동생이 현재 토핑을 가지고 있지 않다면 true로 바꿈
        // 가지고 있지 않던 토핑을 가지게 되었으니 brother++ (동생이 가진 토핑의 종류 추가)
        if(!current.brotherHas){
            current.brotherHas = true;
            brother++;
        }
        
        // 상단의 조건문들을 통해 형과 동생이 각각 가진 토핑의 종류 수가 일치한다면 answer++
        if(me === brother) answer++;
        
        // 해당 과정을 통해 수정된 객체를 다시 toppingMap에 set한다.
        toppingMap.set(T[i], current)
    }
    
    return answer;
}