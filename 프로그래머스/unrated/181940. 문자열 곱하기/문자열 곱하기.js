function solution(my_string, k) {
    let answer = '';
    for(let i = 0; i < k; i++) answer += my_string;
    return answer;
}