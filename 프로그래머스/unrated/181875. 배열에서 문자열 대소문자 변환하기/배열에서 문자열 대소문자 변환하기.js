function solution(strArr) {
    return strArr.map((el,i) => {
        if(i % 2 === 1) return el.toUpperCase();
        else return el.toLowerCase();
    })
}