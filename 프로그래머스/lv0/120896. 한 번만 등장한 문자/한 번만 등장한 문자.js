function solution(s) {
    let obj = {}
    
    s.split('').forEach(el => {
        if(obj[el] === undefined) obj[el] = 1;
        else obj[el]++;
    })
    
    return Object.entries(obj).filter(el => el[1] === 1).map(el => el[0]).sort().join('')
}