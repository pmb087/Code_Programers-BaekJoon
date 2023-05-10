function solution(code) {
    let answer = '';
    let mode = 0;
    
    code.split('').forEach((el,i) => {
        if(mode === 0){
            if(el !== '1'){
                if(i % 2 === 0) answer += el;
            } else mode = 1;
        } else {
            if(el !== '1'){
                if(i % 2 === 1) answer += el;
            } else mode = 0;
        }
    })
    
    return answer === '' ? 'EMPTY' : answer;
}