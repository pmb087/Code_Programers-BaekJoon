function solution(num_list) {
    if(num_list.length >= 11) return num_list.reduce((acc,cur) => acc+cur);
    return num_list.reduce((acc,cur) => acc*cur);
}