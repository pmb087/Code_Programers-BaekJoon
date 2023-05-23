function solution(picks, minerals) {
    
    // 곡괭이 객체로 변환
    const mappedPicks = {};
    
    picks.forEach((pick,index) => {
        if(index === 0) mappedPicks['D'] = pick;
        else if(index === 1) mappedPicks['I'] = pick;
        else mappedPicks['S'] = pick;
    })
    
    // 곡괭이 키값
    const picksRoll = ['D', 'I', 'S'];
    
    // 모든 광물을 캤을 때 당시의 피로도를 저장한 배열
    const answer = [];
    
    // 피로도 누적 재귀
    const pickingRecersion = (pick, picksObj, mines, fatigue) => {
        let curFatigue = fatigue;
        const copyMines = [...mines];
        
        for(let i = 0; i < 5; i++){
            // 5번의 곡괭이질 도중에 광물을 전부 소모한 경우 해당 시점의 피로도를 저장하고 함수 종료
            if(copyMines.length < 1){
                answer.push(curFatigue);
                return;
            };
            
            // 현재 대상 광물
            const currentMine = copyMines.shift();
            
            // 곡괭이 종류에 따라 5번의 반복동안 사용되는 피로도 누적
            if(pick === 'D') curFatigue += 1;
            else if(pick === 'I'){
                if(currentMine === 'diamond') curFatigue += 5;
                else curFatigue += 1;
            } else {
                if(currentMine === 'diamond') curFatigue += 25;
                else if(currentMine === 'iron') curFatigue += 5;
                else curFatigue += 1;
            }
        }
        
        // 광물을 전부 소모한 경우 피로도를 저장하고 함수 종료
        if(copyMines.length < 1){
            answer.push(curFatigue);
            return;
        };
        
        // 곡괭이를 전부 소모한 경우 피로도를 저장하고 함수 종료
        if(Math.max(...Object.values(picksObj)) === 0){
            answer.push(curFatigue);
            return;            
        }
        
        // 다음 곡괭이 3종류의 재귀를 바뀐 정보를 사용해서 실행
        for(let i = 0; i < 3; i++){
            if(picksObj[picksRoll[i]] > 0){
                const copyPicks = {...picksObj};
                copyPicks[picksRoll[i]]--;
                pickingRecersion(picksRoll[i], copyPicks, copyMines, curFatigue);
            }
        }
    }
    
    // 첫 곡괭이 선정후 재귀함수 시작
    for(let i = 0; i < 3; i++){
        if(mappedPicks[picksRoll[i]] > 0){
            const copyPicks = {...mappedPicks};
            copyPicks[picksRoll[i]]--;
            pickingRecersion(picksRoll[i], copyPicks, [...minerals], 0);
        }
    }
    
    return Math.min(...answer);
}
