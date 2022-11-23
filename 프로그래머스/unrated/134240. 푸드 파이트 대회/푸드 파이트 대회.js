function solution(food) {
    let str = '';
    food.slice(1).forEach((el,index)=>{
        for(let i = 0; i < Math.floor(el / 2); i++){
            str += index+1
        }
    })
    return str + '0' + str.split("").reverse().join("");;
}