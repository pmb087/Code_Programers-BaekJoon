function solution(score) {
    let rank = {};
    
    let average = score.map(el => {
        const [eng,math] = el;
        return (eng + math) / 2;
    })
    
    const copy = [...average];
    
    copy.sort((a,b) => b-a).forEach((num,i) => {
        if(rank[num] === undefined) rank[num] = i+1
        else return;
    })
    
    average = average.map(num => rank[num]);   
    
    return average;
}