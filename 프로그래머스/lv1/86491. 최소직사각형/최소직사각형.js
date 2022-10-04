const solution = sizes => {
    let first = [];
    let second = [];
    
    sizes.forEach(el => {
        el.sort((a,b)=> b-a)
    })
    
    sizes.forEach(el => {
        first.push(el[0]);
        second.push(el[1]);
    })
    
    return Math.max(...first) * Math.max(...second)    
}