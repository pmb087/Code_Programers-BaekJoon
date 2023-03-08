function solution(wallpaper) {
    const xPos = [];
    const yPos = [];
    
    for(let i = 0; i < wallpaper.length; i++){
        const currentElement = wallpaper[i].split('');
        if(!currentElement.includes('#')) continue;
        
        xPos.push(i);
        
        const instance = [];
        let idx = currentElement.indexOf('#');
        
        while (idx != -1) {
          instance.push(idx);
          idx = currentElement.indexOf('#', idx + 1);
        }
        yPos.push(...instance);
    }
    
    const [lux, rdx] = [Math.min(...xPos), Math.max(...xPos) + 1];
    const [luy, rdy] = [Math.min(...yPos), Math.max(...yPos) + 1];
    
    return [lux, luy, rdx, rdy]
}