function solution(cipher, code) {
    let answer = '';
    for(let i = code-1; i <= cipher.length-1; i += code) answer += cipher[i];
    return answer;
}