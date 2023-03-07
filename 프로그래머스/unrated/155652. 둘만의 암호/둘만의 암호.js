function solution(s, skip, index) {
    s = s.split('').map((_,i) => s.charCodeAt(i));
    skip = skip.split('').map((_,i) => skip.charCodeAt(i));
    
    s = s.map(Oel => {
        let current = Oel;
        for(let i = 0; i < index; i++){
            current++
            if(current > 122) current = 97;
            if(skip.includes(current)) i--;
        }
        return current;
    })
    
    return String.fromCharCode(...s)
}