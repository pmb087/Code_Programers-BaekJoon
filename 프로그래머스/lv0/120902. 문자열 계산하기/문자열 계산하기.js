function solution(my_string) {
    const arithmArr = my_string.split(' ');
    
    let curSum = Number(arithmArr[0]);
    
    for(let i = 1; i < arithmArr.length; i++){
        if(arithmArr[i] === '+'){
            curSum += Number(arithmArr[i+1]);
            i++;
        } else {
            curSum -= Number(arithmArr[i+1]);
            i++;            
        }
    }
    
    return curSum;
}