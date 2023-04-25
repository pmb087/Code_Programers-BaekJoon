function solution(num_list) {
    const even = num_list.filter(num => num % 2 === 0);
    const odd = num_list.filter(num => num % 2 === 1);
    
    return Number(even.reduce((acc,cur) => acc+cur,'')) + Number(odd.reduce((acc,cur) => acc+cur,''))
}