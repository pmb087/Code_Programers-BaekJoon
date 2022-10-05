function solution(s, n) {
    let answer ="";
    let codes = [];
    let codesPlus = [];
    for(let i = 0; i < s.length; i++){
        if(s[i].charCodeAt() === 32){
            codes.push(s[i].charCodeAt());
            codesPlus.push(s[i].charCodeAt());
        } else if(s[i].charCodeAt() !== 32){
            codesPlus.push((s[i].charCodeAt() + n));
            codes.push(s[i].charCodeAt());
        }
    }
    for(let j = 0; j < codes.length; j++)
        if(((codes[j] >= 65) && (codes[j] <= 90)) && (codesPlus[j] > 90)){
            codesPlus[j] = codesPlus[j] - 26;
        } else if(((codes[j] >= 97) && (codes[j] <= 122)) && (codesPlus[j] > 122)){
            codesPlus[j] = codesPlus[j] - 26;
        }
            
    codesPlus.forEach(el=>answer += String.fromCharCode(el))
    console.log(answer)
    return answer;
    }