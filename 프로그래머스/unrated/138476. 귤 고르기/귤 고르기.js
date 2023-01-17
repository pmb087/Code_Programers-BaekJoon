function solution(k, t) {
    let countObj = {};
    t.forEach(el => {
        if(countObj[`${el}`] === undefined){
            countObj[`${el}`] = 1;
        } else countObj[`${el}`] += 1;
    })
    let count = 1;
    let sortedArr = Object.values(countObj).sort((a,b)=>b-a);
    for(let i = 0; i < sortedArr.length; i++){
        if(k <= sortedArr[i]) break;
        k -= sortedArr[i];
        count++;
    }
    return count;
}