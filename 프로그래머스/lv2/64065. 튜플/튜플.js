function solution(s) {    
    s = s.slice(2, -2).split(/},{/g).sort((a, b) => a.length - b.length);
    let arr = [];
    s.forEach(el => {
        arr.push(el.split(',').map(el => parseInt(el)))
    })
    let instance = {};
    arr.forEach(el =>{
        el.forEach(el2 => {
           if(instance[`${el2}`] === undefined){
               instance[`${el2}`] = 1;
           } else {
               instance[`${el2}`]++
           }
        })
    });
    
    return Object.entries(instance).sort((a,b)=>b[1]-a[1]).map(el => parseInt(el[0]))
}