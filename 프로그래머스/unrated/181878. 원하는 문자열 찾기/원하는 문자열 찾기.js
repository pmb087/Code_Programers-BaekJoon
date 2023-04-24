function solution(myString, pat) {
    if(myString.toUpperCase().indexOf(pat.toUpperCase()) !== -1) return 1;
    return 0;
}