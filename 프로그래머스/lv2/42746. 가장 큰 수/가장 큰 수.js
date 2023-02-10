function solution(numbers) {
    numbers.sort((a,b) => (Number(`${a}${b}`) < Number(`${b}${a}`)) ? 1 : -1)
    return numbers.reduce((acc,cur)=>acc+cur,0) === 0 ? '0' : numbers.join('')
}