function solution(p) {
    function isGood(str){
        let count = 0;
        for(let i = 0; i < str.length; i++){
            if(str[i] === '(') count++;
            else if(str[i] === ')') count--;
            
            if(count < 0) return false;
        }
        return true;        
    }
    
    function search(str){
        if(str === '') return '';
        let left = 0;
        let right = 0;
        for(let i = 0; i < str.length; i++){
            if(str[i] === '(') left++;
            else if(str[i] === ')') right++;
            
            if(left + right === str.length) return [str,''];
            else if(left === right) return [str.slice(0,i+1), str.slice(i+1)];
        }        
    } 
    
    function ifNotGood(u,v){
        let answer = `(${v})`;        
        let formatedU = u.slice(1,u.length-1).split('').map(el => {
            if(el === '(') return ')';
            else return '(';            
        }).join('');
        
        answer += formatedU;
        
        return answer;
    }
    
    function test(str){            
        if(isGood(str)) {
            return str
        } else {
            const [L,R] = search(str);
            if(isGood(L)){
                return L + test(R);
            } else {
                return ifNotGood(L,test(R))
            }
        }
    } 
    
    return test(p)
}