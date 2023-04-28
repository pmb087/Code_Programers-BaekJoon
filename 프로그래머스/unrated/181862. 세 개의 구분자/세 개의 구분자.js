function solution(myStr) {
    const converted = myStr.replace(/[abc]/g,' ');
    const splited = converted.split(' ');
    
    const answer = splited.filter(el => el !== '');
    
    return answer.length === 0 ? ['EMPTY'] : answer;
    
}