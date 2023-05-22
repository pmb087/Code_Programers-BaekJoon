function solution(relation) {
    // 후보키 배열
    const candidate = [];
    
    // 유일성 판별
    // relation 배열의 각 컬럼을 비교하며 중복값이 없다면(유일성을 띔) 후보키에 해당 컬럼의 인덱스를 추가한다.
    for(let i = 0; i < relation[0].length; i++){
        const instance = [];
        for(let j = 0; j < relation.length; j++){
            if(!instance.includes(relation[j][i])) instance.push(relation[j][i]);
            else break;
        }
        
        if(instance.length === relation.length) candidate.push([i]);
    }
    
    // 최소성 판별
    // 유일성을 띄는 컬럼은 최소성 판별의 잣대가 될 수 없으므로 해당 컬럼을 제외한 새로운 테이블을 만든다.
    const minimality = relation.map(row => row.filter((el,idx) => !candidate.includes(idx)));
    
    // 재귀검증의 최대 인덱스 제한
    const maxIndex = minimality[0].length - 1;
    
    // 현재 인덱스문자열의 결과값이 유일성을 띄지 않는경우 인자의 인덱스문자열에 탐색범위를 추가하여 재귀한다.
    // ex) "01" => [0, 1]배열로 변환 => minimality의 각 원소의 0번인덱스와 1번인덱스를 문자열로 합친다.
    //     합쳐진 문자열을 instance 배열에 push하며 중복이 발견된다면 해당 튜플에서는 유일성을 띄지 않으므로 탐색범위를 추가하여 재귀한다.
    //     중복이 발견되지 않았다면 해당 조합의 최소성을 띄는 튜플이므로 후보키 배열에 추가하고 해당 트리의 재귀를 끊는다.
    //     모든 트리의 재귀가 종료되면(각 트리의 최소성을 보장하는 유일성 튜플이 모두 발견되었거나 최데 인덱스 제한에 걸려 종료된 경우)
    //     재귀가 최종적으로 종료된다.
    const recursionValidation = indexString => {
        const indexStringConvertedToNumber = indexString.split('').map(str => Number(str));
        let currentTupple = minimality.map(el => el[indexStringConvertedToNumber[0]]);
        
        for(let i = 1; i <= indexStringConvertedToNumber.length -1; i++){
            const currentIndex = indexStringConvertedToNumber[i]
            
            currentTupple = currentTupple.map((el,index) => el + ',' + minimality[index][currentIndex]);
        }
        
        const instance = [];
        let isMinimality = true;
        
        for(let i = 0; i < currentTupple.length; i++){
            if(!instance.includes(currentTupple[i])) instance.push(currentTupple[i]);
            else {
                isMinimality = false;
                break;
            }
        }
        
        if(isMinimality) candidate.push(indexStringConvertedToNumber);
        else {
            for(let i = indexStringConvertedToNumber[indexStringConvertedToNumber.length - 1] + 1; i <= maxIndex; i++){
                recursionValidation(indexString + i)
            }
        }
    }
    
    // 최소성을 검증하는 경우 유일성을 띄는 단일 컬럼은 존재하지 않기 때문에
    // 최소 2개의 컬럼을 조합해서 검증해야 한다.
    // 따라서 모든 2개의 조합을 대상으로 재귀함수를 실행한다.
    for(let i = 0; i < minimality[0].length - 1; i++){
        for(let j = i + 1; j < minimality[0].length; j++){
            const curIdxStr = i + '' + j;
            recursionValidation(curIdxStr);
        }
    }
    
    // 해당 라인에서는 모든 최소성과 유일성을 포함한 candidate 배열을 확보한 상태이다
    // 하지만 탐색 순서가 고정됨에 따라 [0,1,2] , [0,2] 두 경우가 모두 배열에 있을 수 있다.
    // 따라서 해당경우를 필터링하는 작업을 거쳐야 한다.
    
    candidate.sort((a,b) => a.length - b.length);
    const duplicate = [];
    
    for(let i = 0; i < candidate.length-1; i++){
        for(let j = i+1; j < candidate.length; j++){
            let isDuplicate = true;
            for(let k = 0; k < candidate[i].length; k++){
                if(!candidate[j].includes(candidate[i][k])) isDuplicate = false;
                if(!isDuplicate) break;
            }
            if(isDuplicate) duplicate.push(j);
        }
    }             
    
    const duplicateArr = [...new Set([...duplicate])]
    const answer = candidate.filter((el,index) => !duplicateArr.includes(index)).length
    
    return answer;
}