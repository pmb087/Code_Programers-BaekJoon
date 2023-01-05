const braketObject = {
    '[':']',
    '(':')',
    '{':'}'
}

function isCorrect(arg){
    arg = arg.split('');
    for(let i = 0; i < arg.length-1; i++){
        if(arg[i+1] === braketObject[`${arg[i]}`]){
            arg = [...arg.slice(0,i) , ...arg.slice(i+2)];
            i = -1;
        }
    }
    if(arg.length === 0){
        return true;
    }
    return false;
}

function solution(s){
    let answer = 0;
    if(isCorrect(s)) answer++;
    for(let i = 0; i < s.length-1; i++){
        s = s.slice(1) + s.slice(0,1);
        if(isCorrect(s)) answer++;
    }
    return answer;
}
