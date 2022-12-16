function solution(s) {
    s = s.split(' ');
    s = s.map(el => el.split(''));
    for(let i = 0; i < s.length; i++){
        s[i] = s[i].map((el,idx) => {
            if(typeof el === 'string' && idx === 0){
                return el.toUpperCase();                
            }
            if(typeof el === 'string' && idx !== 0){
                return el.toLowerCase();        
            }
            if(typeof el !== 'string'){
                return el
            }
        });
    }
    s = s.map(el => el.join(''));
    s = s.join(' ');
    return s;
}