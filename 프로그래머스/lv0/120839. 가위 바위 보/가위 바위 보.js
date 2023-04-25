function solution(rsp) {
    const winObject = {
        2:0,
        0:5,
        5:2
    }
    
    return rsp.split('').map(el => winObject[Number(el)]).join('');
}