function solution(numbers, hand) {
    const LEFT_FIRST = [7, 4, 1];
    const RIGHT_FIRST = [9, 6, 3];
    const MIDDLE_NUM = [0, 8, 5, 2];
    let curL = [0,1];
    let curR = [0,1];
    let answer = '';
    numbers.forEach(el=>{
        if(LEFT_FIRST.includes(el)){
            answer += 'L';
            curL = [LEFT_FIRST.indexOf(el)+1, 1]
        } else if(RIGHT_FIRST.includes(el)){
            answer += 'R';
            curR = [RIGHT_FIRST.indexOf(el)+1, 1]
        } else if(MIDDLE_NUM.includes(el)) {
            if(curL[0] === curR[0] && curL[1] === curR[1]){
                if(hand === 'left'){
                    answer += 'L';
                    curL = [MIDDLE_NUM.indexOf(el), 0]
                } else {
                    answer += 'R';
                    curR = [MIDDLE_NUM.indexOf(el), 0]                    
                }
            } else if(Math.abs(MIDDLE_NUM.indexOf(el) - curL[0]) + curL[1] <
                      Math.abs(MIDDLE_NUM.indexOf(el) - curR[0]) + curR[1]){
                answer += 'L';
                curL = [MIDDLE_NUM.indexOf(el), 0];
            } else if(Math.abs(MIDDLE_NUM.indexOf(el) - curL[0]) + curL[1] >
                      Math.abs(MIDDLE_NUM.indexOf(el) - curR[0]) + curR[1]){
                answer += 'R';
                curR = [MIDDLE_NUM.indexOf(el), 0];
            } else if(Math.abs(MIDDLE_NUM.indexOf(el) - curL[0]) + curL[1] ===
                      Math.abs(MIDDLE_NUM.indexOf(el) - curR[0]) + curR[1]){
                if(hand === 'left'){
                    answer += 'L';
                    curL = [MIDDLE_NUM.indexOf(el), 0];
                } else{
                answer += 'R';
                curR = [MIDDLE_NUM.indexOf(el), 0];
                }
            }
        }
        
        console.log(el,curL,curR)
    })
    return answer;
}