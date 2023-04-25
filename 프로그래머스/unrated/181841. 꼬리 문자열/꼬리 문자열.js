function solution(str_list, ex) {
    let answer = '';
    
    str_list.forEach(el => {
        if(el.includes(ex)) return;
        answer += el;
    })
    
    return answer;
}