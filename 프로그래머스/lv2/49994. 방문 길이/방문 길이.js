function solution(dirs) {
    let X = 0;
    let Y = 0;
    let exMove = [];
    
    dirs.split('').forEach(el => {
        if(el === 'U'){
            if(Y + 1 > 5) return;
            const curY = Y;
            Y += 1;
            const moveInfo = [[X,curY],[X,Y]]
            if(!exMove.includes(JSON.stringify(moveInfo))){
                exMove.push(JSON.stringify(moveInfo));
                return;
            }
        }
        if(el === 'D'){
            if(Y - 1 < -5) return;
            const curY = Y;
            Y -= 1;
            const moveInfo = [[X,Y],[X,curY]]
            if(!exMove.includes(JSON.stringify(moveInfo))){
                exMove.push(JSON.stringify(moveInfo));
                return;
            }
        }
        if(el === 'L'){
            if(X - 1 < -5) return;
            const curX = X;
            X -= 1;
            const moveInfo = [[curX,Y],[X,Y]]
            if(!exMove.includes(JSON.stringify(moveInfo))){
                exMove.push(JSON.stringify(moveInfo));
                return;
            }
        }
        if(el === 'R'){
            if(X + 1 > 5) return;
            const curX = X;
            X += 1;
            const moveInfo = [[X,Y],[curX,Y]]
            if(!exMove.includes(JSON.stringify(moveInfo))){
                exMove.push(JSON.stringify(moveInfo));
                return;
            }
        }
    })
    
    return exMove.length;
}