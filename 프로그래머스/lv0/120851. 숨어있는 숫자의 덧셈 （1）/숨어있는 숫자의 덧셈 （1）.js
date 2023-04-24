function solution(my_string) {
    const regex = /[^0-9]/gi;
    const instance = my_string.replace(regex, "");
    
    return instance.split('').map(el => Number(el)).reduce((acc,cur)=>acc+cur);
}