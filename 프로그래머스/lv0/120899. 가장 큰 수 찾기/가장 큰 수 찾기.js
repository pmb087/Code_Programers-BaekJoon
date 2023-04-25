function solution(array) {
    let maxObj = {value: -Infinity, index: -1};
    
    array.forEach((num,i) => {
        if(maxObj.value < num){
            maxObj.value = num;
            maxObj.index = i;
        }
    })
    
    return [maxObj.value, maxObj.index]
}