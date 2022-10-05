function solution(s){
    let arr = s.split('').map(el => el.charCodeAt());
    let result = 0;
    arr.forEach(el =>{
        if(el === 80 || el ===112) result++;
        if(el === 89 || el === 121) result--;
    })
    return result === 0 ? true : false ;
}