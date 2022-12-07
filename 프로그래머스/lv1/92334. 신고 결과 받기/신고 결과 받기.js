const solution = (id, report, k) => {
    const uniqReport = [...new Set(report)].map(el => el.split(' '));
    let reportStack = {};
    let reportedId = {};
    let answer = [];
    id.forEach(el=>{
        reportStack[`${el}`] = [];
    })
    uniqReport.forEach(el=>{
        reportStack[`${el[0]}`].push(el[1]);
    })
    id.forEach(el=>{
        reportedId[`${el}`] = 0;
    })
    Object.values(reportStack).forEach(el=>{
        for(let i = 0; i < el.length; i++){
            reportedId[`${el[i]}`]++
        }
    })    
    id.forEach(el=>{
        reportStack[`${el}`] = reportStack[`${el}`].filter(el2=> reportedId[`${el2}`] >= k);
    })
        
    return Object.values(reportStack).map(el => el.length);
}