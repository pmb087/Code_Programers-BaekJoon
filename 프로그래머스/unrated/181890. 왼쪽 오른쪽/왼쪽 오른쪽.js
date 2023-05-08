function solution(str_list) {
    let answer = [];
    
    for(let i = 0; i < str_list.length; i++){
        const curStr = str_list[i];
        if(curStr === 'l'){
            answer = str_list.slice(0,i);
            break;
        } else if(curStr === 'r'){
            answer = str_list.slice(i + 1);
            break;
        } 
    }
    
    return answer;
}