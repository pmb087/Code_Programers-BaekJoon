function solution(my_string) {
    return my_string.split('').filter(el => /[0-9]/.test(el)).map(el => Number(el)).sort((a,b)=>a-b)
}