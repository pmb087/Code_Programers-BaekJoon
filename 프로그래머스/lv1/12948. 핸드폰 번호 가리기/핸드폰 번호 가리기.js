function solution(phone_number) {
    let answer = '';
    let lastFour = phone_number.substr(phone_number.length-4);
    
    for(let i = 0; i < (phone_number.length - 4); i++ ) answer += '*';
    
    answer += lastFour;
    
    return answer;
}