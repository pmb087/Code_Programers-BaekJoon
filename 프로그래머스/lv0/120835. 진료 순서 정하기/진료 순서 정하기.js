function solution(emergency) {
    const copy = [...emergency].sort((a,b)=>b-a);
    let obj = {};
    
    copy.forEach((el,i) => {
        obj[el] = i+1;
    })
    
    return emergency.map(el => obj[el])
}