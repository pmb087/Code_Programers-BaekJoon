function solution(record) {
    let uidNick = {};
    let answer = [];
    for(let i = 0; i < record.length; i++){
        const currentArr = record[i].split(' ');
        if(currentArr[0] === 'Enter' || currentArr[0] === 'Change' ){
            uidNick[currentArr[1]] = currentArr[2];
        }
    }
    for(let j = 0; j < record.length; j++){
        const currentArr = record[j].split(' ');
        if(currentArr[0] === 'Enter'){
            const currentMsg = `${uidNick[currentArr[1]]}님이 들어왔습니다.`
            answer.push(currentMsg);
            continue;
        }
        if(currentArr[0] === 'Leave'){
            const currentMsg = `${uidNick[currentArr[1]]}님이 나갔습니다.`
            answer.push(currentMsg);
        }
    }
    return answer;
}