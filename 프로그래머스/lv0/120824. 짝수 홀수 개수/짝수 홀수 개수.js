const solution = n => {
    let O = 0;
    let E = 0;
    n.forEach(el=> {
        if(el % 2 !== 0) O++;
        else E++;
    })
    return [E,O];
}