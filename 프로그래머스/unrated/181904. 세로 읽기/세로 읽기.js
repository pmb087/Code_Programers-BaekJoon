function solution(my_string, m, c) {
    const strArr = my_string.split('');
    const splited = [];
    let answer = '';
    
    while(strArr.length) splited.push(strArr.splice(0,m));
    
    splited.forEach(str => {
        const targetStr = str[c-1];
        
        answer += targetStr;
    })
    
    return answer;
}