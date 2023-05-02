function solution(dots) {
    const initialXY = dots[0];
    let minMax = [initialXY[0],initialXY[1],initialXY[0],initialXY[1]];
    
    for(let i = 0; i < dots.length; i++){
        const [minX,minY,maxX,maxY] = minMax;
        const [curX,curY] = dots[i];
        
        if(curX < minX) minMax[0] = curX;
        else if(curX > maxX) minMax[2] = curX;
        
        if(curY < minY) minMax[1] = curY;
        else if(curY > maxY) minMax[3] = curY;
    }
    
    
    const [minX,minY,maxX,maxY] = minMax;
    
    return (maxX - minX) * (maxY - minY);
}