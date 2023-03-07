function solution(s, skip, index) {
    const sAski = s.split('').map(el => el.charCodeAt(0));
    const skipAski = skip.split('').map(el => el.charCodeAt(0));
    
    const answer = sAski.map(Oel => {
        let current = Oel;
        for(let i = 0; i < index; i++){
            current++
            if(current > 122) current = 97;
            if(skipAski.includes(current)) i--;
        }
        return current;
    })
    
    return String.fromCharCode(...answer)
}