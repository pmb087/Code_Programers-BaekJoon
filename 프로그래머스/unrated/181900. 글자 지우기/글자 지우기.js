function solution(my_string, indices) {
    return my_string.split('').filter((_,i)=> !indices.includes(i)).join('')
}