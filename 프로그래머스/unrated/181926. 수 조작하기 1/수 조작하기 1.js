function solution(n, control) {
    const mappingObject = {
        'w':1,
        's':-1,
        'd':10,
        'a':-10
    }
    control.split('').forEach(el => {
        n += mappingObject[el]
    })
    
    return n;
}