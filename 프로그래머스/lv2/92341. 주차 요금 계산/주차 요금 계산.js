function solution(F, R) {
    
    function formatTime(time){
        const instance = time.split(':');
        const first = Number(instance[0]) * 60;
        const second = Number(instance[1]);
        return (first + second);
    }
    
    function formatSum(sum){
        if(F[0] > sum) return F[1];
        
        let currentSum = F[1];
        sum -= F[0];
        
        while(sum > 0){
            sum -= F[2];
            currentSum += F[3];
        }
        
        return currentSum;
    }
    
    
    let info = {};
    R = R.map(el => el.split(' '));
    R.forEach(el => {
        if(el[2] === 'IN' && info[el[1]] === undefined){
            info[el[1]] = {in: formatTime(el[0]), sumTime: 0, state: el[2]};
        }
        if(el[2] === 'IN' && info[el[1]] !== undefined){
            info[el[1]] = {...info[el[1]],in: formatTime(el[0]), state: el[2]};
        }
        if(el[2] === 'OUT') {
            const curTime = formatTime(el[0]) - info[el[1]].in;  
            info[el[1]] = {...info[el[1]],in: 0, sumTime: info[el[1]].sumTime + curTime, state: el[2]};
        }
    })
    let currentObj = Object.entries(info).sort((a,b)=>Number(a[0])-Number(b[0])).map(el => el[1])
    currentObj.forEach((el,i) => {
        if(el.state === 'IN'){
            currentObj[i].sumTime += formatTime('23:59') - currentObj[i].in;
            currentObj[i].in = 0;
            currentObj[i].state = 'OUT';
        }
    })
    let answer = currentObj.map(el => {
        return formatSum(el.sumTime)
    })
    return answer;
}
