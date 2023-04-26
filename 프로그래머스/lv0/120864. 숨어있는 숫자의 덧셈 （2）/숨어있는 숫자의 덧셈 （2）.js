function solution(my_string) {
    const answer = my_string.replace(/[^0-9]/g,' ');
    return answer.split(' ').map(el => Number(el)).reduce((acc,cur)=>acc+cur)
}