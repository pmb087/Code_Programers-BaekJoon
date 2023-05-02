function solution(keyinput, board) {
    const [maxX, maxY] = [(board[0] - 1) / 2,(board[1] - 1) / 2];
    
    let curPos = [0,0];
    
    for(let i = 0; i < keyinput.length; i++){
            if(keyinput[i] === 'left' && curPos[0] > maxX * -1) curPos[0]--;
            else if(keyinput[i] === 'right' && curPos[0] < maxX) curPos[0]++;
            else if(keyinput[i] === 'up' && curPos[1] < maxY) curPos[1]++;
            else if(keyinput[i] === 'down' && curPos[1] > maxY * -1) curPos[1]--;
    }
    
    return curPos
}