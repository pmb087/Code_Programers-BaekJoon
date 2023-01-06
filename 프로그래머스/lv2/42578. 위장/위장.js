const solution = c => {
    let cObj = {};
    let answer = 1;
    c.forEach(el => {
        if(!Array.isArray(cObj[`${el[1]}`])){
            return cObj[`${el[1]}`] = [el[0]];
        } else {
        cObj[`${el[1]}`] = [...cObj[`${el[1]}`],el[0]];
        }
    });
    Object.keys(cObj).forEach(el => {
        answer = answer * (cObj[`${el}`].length + 1);
    });
    
    return answer - 1;
}