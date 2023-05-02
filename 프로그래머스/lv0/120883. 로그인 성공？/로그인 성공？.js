function solution(id_pw, db) {
    const [ID,PW] = id_pw;
    const answer = {0: 'fail', 1: 'wrong pw', 2: 'login'};
    let PASS = 0;
    
    for(let i = 0; i < db.length; i++){
        const [curId, curPw] = db[i];
        
        if(curId === ID && curPw === PW){
            PASS = 2;
            break;
        } else if(curId === ID){
            PASS = 1;
            break;
        }
    }
    
    return answer[PASS];
}