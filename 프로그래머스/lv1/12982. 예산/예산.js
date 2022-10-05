const solution = (d,budget) => {
    let answer = 0;
    for(let i = 0; i < d.length; i++){
        if(budget - d.sort((a,b)=>b-a).slice(i).reduce((a,b)=>a+b) >= 0){
            answer = d.length - i;
            break;
        }
    }
    return answer;
}