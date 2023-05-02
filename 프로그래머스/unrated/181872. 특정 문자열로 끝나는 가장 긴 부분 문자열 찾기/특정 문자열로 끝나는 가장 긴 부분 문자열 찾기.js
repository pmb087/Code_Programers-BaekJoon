function solution(myString, pat) {
    let pos = 0;
    
    while(myString.indexOf(pat,pos) !== -1) pos++;
    
    return myString.slice(0,pos + (pat.length - 1));
}