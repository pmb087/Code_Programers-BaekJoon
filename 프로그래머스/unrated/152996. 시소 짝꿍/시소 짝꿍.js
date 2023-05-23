function solution(weights){
    let obj = {};
    let count = 0;
    
    // weight 배열의 중복을 제거하고 등장한 횟수를 obj 객체에 누적함
    // 이미 객체에 해당 키가 존재한다는 것은 같은 무게가 중복되어 배열에 들어있다는 것을 의미하며
    // 같은 무게 끼리는 시소 짝꿍이므로 해당 과정에서미리 count++ 를 한다.
    for (const num of weights){
        if(obj[num] === undefined){
            obj[num] = 1; 
        } else {
            count+=obj[num];
            obj[num] += 1;
        };
    };

    const arr = Object.keys(obj);
    const result = {};
    
    // 무게 * 시소의 m 별 결과값을 모두 result 객체에 저장한다.
    // 같은 무게가 다시 등장했다는 것은 기준 무게와 시소의 m를 제외하고 보더라도 결과적으로 시소짝꿍이라는 뜻
    // 같은 무게별로 중복을 제거하고 중복된 횟수를 obj의 value로 할당해놨기 때문에
    // 해당 조합의 시소 짝궁은 obj[el] 의 값만큼 존재한다, 따라서 count += result[temp] * obj[el];
    for(let i = 2; i<=4; i++){
        arr.forEach(el=> {
            let temp = el * i;
            if(result[temp] === undefined){
                result[temp] = obj[el];
            } else {
                count += result[temp] * obj[el];
                result[temp] += obj[el];
            };
        })
    };
    
    // 최종산출된 짝꿍 갯수 === count 반환
    return count
};