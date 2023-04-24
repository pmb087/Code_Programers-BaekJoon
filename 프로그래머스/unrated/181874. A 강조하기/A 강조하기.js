function solution(myString) {
    const instance = myString.split('');
    const answer = instance.map(str => {
        if(str === 'a') return 'A';
        else if(str !== 'A' && str === str.toUpperCase()) return str.toLowerCase();
        else return str;
    })
    
    return answer.join('')
}