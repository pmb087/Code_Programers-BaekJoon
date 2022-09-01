function solution(x) {
    let sum = 0;
    let strX = x + '';
    for(let i = 0; i < strX.length; i++){
        sum += parseInt(strX[i]);
    }
    if((x % sum) != 0){
        return false;
    } else if((x % sum) == 0) return true;
}