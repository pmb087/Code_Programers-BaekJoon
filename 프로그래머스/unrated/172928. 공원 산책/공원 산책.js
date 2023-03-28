function solution(park, routes) {
    const [width, height] = [park[0].length, park.length];
    let start = [];
    
    park.forEach((el,index) => {
        if(el.indexOf('S') !== -1) start = [index, el.indexOf('S')];
    })
    
    
    function search(cur, moveLength){
        let result;
        if(cur === 'W' || cur === "N") moveLength = moveLength * -1;    
        
        if(cur === 'W' || cur === 'E') result = start[1] + moveLength;
        else result = start[0] + moveLength;        
        
        if(cur === 'E' || cur === 'W'){
            if(result > width - 1 || result < 0) return;
            const [min, max] = [Math.min(result, start[1]), Math.max(result, start[1])]
            const middle = park[start[0]].slice(min,max+1);
            if(middle.includes('X')) return;
            else start = [start[0],result];
        } else {
            if(result > height - 1 || result < 0) return;
            let blocked = false;
            const [min, max] = [Math.min(result, start[0]), Math.max(result, start[0])]

            for(let i = min; i <= max; i++){
                if(park[i][start[1]] === "X") blocked = true
            }
            
            if(blocked) return;
            else start = [result,start[1]];
        }
    }
    

    
    routes.forEach(route => {
        const [direction, moveLength] = route.split(' ').map((el,idx) => {
            if(idx === 1) return Number(el)
            else return el;
        })
        search(direction, moveLength);
    })
    
    return start;
}