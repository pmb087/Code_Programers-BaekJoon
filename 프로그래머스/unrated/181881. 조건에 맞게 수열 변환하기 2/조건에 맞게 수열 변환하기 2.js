function isSame(A1, A2){
    let answer = true;
    
    for(let i = 0; i < A1.length; i++){
        if(A1[i] !== A2[i]) {
            answer = false;
            break;
        }
    }
    return answer;
}

function solution(arr) {
    let firstCopy = [...arr];
    let secondCopy = [];
    let answer = 0;
    
    while(true){
        secondCopy = firstCopy.map(el => {
            if(el >= 50 && el % 2 === 0) return el / 2;
            else if(el < 50 && el % 2 === 1) return el * 2 + 1;
            else return el;
        })
        if(isSame(firstCopy, secondCopy)) break;
        answer++;
        
        firstCopy = secondCopy.map(el => {
            if(el >= 50 && el % 2 === 0) return el / 2;
            else if(el < 50 && el % 2 === 1) return el * 2 + 1;
            else return el;
        })
        if(isSame(firstCopy, secondCopy)) break;
        answer++;
    }
    
    return answer;
}