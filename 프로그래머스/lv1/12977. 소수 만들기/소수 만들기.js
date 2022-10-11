const isPrime = n => {    
    let test = 0;
    Array(n).fill().map((_,i)=>i+1).forEach(el => {
        if(n % el === 0) test++
    });
    return test === 2;
}

const solution = nums => {
    
    let sumArr = [];
    
    for(let i = 0; i < nums.length-2; i++){
        for(let j = i+1; j < nums.length-1; j++){
            for(let k = j+1; k < nums.length; k++){
                sumArr.push(nums[i] + nums[j] + nums[k]);
            }
        }
    }
    return sumArr.filter(el => isPrime(el)).length
}
