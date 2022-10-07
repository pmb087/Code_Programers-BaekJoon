const solution = numbers => {
    let instance = [];
    
    for(let i = 0; i < numbers.length -1; i++){
        for(let j = i+1; j < numbers.length; j++){
            if(!instance.includes(numbers[i] + numbers[j])){
                instance.push(numbers[i] + numbers[j]);
            }
        }
    }
    return instance.sort((a,b)=>a-b)
}